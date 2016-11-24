/**
 * Control used to switch between layers
 * @param opt
 * @constructor
 */
ol.control.Basemaps = function(opt) {

    var options = this.options = this._defineOptions(opt);

    var element = this._defineElement(options);

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });


/*    this.hiddenClassName = "ol-basemaps ol-unselectable ol-control";
    this.shownClassName = this.hiddenClassName + " shown";
    this.hiddenPanelClassName = "ol-basemaps-panel";
    this.shownPanelClassName = this.hiddenPanelClassName + " shown";



    var self = this;
    window.addEventListener('resize', function(){
        self.resize();
    });

    window.addEventListener('orientationchange', function(){
        self.resize();
    });



    // create button
    var button = this._defineButton(options);
    element.appendChild(button);

    // create panel
    this.panel = this._definePanel(options);
    $(options.target).prepend(this.panel);

    if (this.options.panel.openOnLoad) {
        this.showPanel(this.options.target);
    }*/
};

ol.inherits(ol.control.Basemaps, ol.control.Control);

/**
 * Update and extend options
 * @param options
 * @returns {{label: {tootltipTxt: string}, className: string, element: null, target: null}}
 * @private
 */
ol.control.Basemaps.prototype._defineOptions = function(options) {
    var opt = {
        label: {
            tootltipTxt: "Bibliothèque de fonds de carte"
        },
        panel:{
            layers: [],
            openOnLoad: false,
            title: 'Sélectionnez le fonds de carte à afficher'
        },
        className: 'ol-basemaps-panel',
        element: null,
        target: null
    };
    $.extend(true, opt, options);
    return opt;
};


/**
 * Built the list of availables basemaps
 * @param options
 * @returns {Element}
 * @private
 */
ol.control.Basemaps.prototype._defineElement = function(options) {

    var self = this;

    var panel = document.createElement('div');
    panel.className = 'dropdown-menu panel panel-default ' + options.className;
    panel.setAttribute("aria-labelledby", 'dropdownMenu1');

    var panelHeading = document.createElement('div');
    panelHeading.className = 'panel-heading';
    panelHeading.innerHTML = options.panel.title;
    panel.appendChild(panelHeading);




    var panelBody = document.createElement('div');
    panelBody.className = 'row panel-body';



    options.panel.layers.forEach(function(item) {
        if (item.hasOwnProperty('basemaps')) {

            var divCol = document.createElement('div');
            divCol.className = 'col-xs-2 no-padding';

            var a  = document.createElement('a');
            a.className = 'thumbnail';

            a.onclick = function() {
                self._setSource(item);
            };

            var img = document.createElement('img');
            img.setAttribute('alt', item.basemaps.label);
            img.setAttribute('title', item.basemaps.title);
            img.src = item.basemaps.src;

            a.appendChild(img);
            divCol.appendChild(a);
            panelBody.appendChild(divCol);


        }

    });

    panel.appendChild(panelBody);
    return panel;
};

/**
 *
 * @param layer
 * @returns {boolean}
 * @private
 */
ol.control.Basemaps.prototype._setSource = function(layer) {

    var lyrs = map.getLayers();
    lyrs.forEach(function (lyr) {
        if (lyr.get('type') === 'basemaps') {
            lyr.setSource(layer.source);
            return true;
        }
    });

    return false;
};






ol.control.Basemaps.prototype._defineAction = function() {
    console.log('click');
};

/**
 *
 * @param map
 */
ol.control.Basemaps.prototype.setMap = function(map) {
    ol.control.Control.prototype.setMap.call(this, map);
};


/*

/!**
 * Update and extend options
 * @param options
 * @returns {{label: {tootltipTxt: *}}}
 * @private
 *!/
ol.control.Basemaps.prototype._defineOptions = function(options) {
    var opt = {
        label: {
            tootltipTxt: "Bibliothèque de fonds de carte"
        },
        className: 'ol-basemaps-control',
/!*        panel: {
            openOnLoad: true,
            basemapLayers:{
                id: "basemap",                
                name: "groupLevel1",
                label: gt.gettext("Fonds de plan"),
                layers: [],
                type: "radio",
                openOnLoad: false,
                icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAE+AAABPgBPIdqqgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIeSURBVEiJxZa/a1NRFMc/iQFxUXBQmtbGKoiLg9W5dHOUOKiDf4BjBzcH6SriqqB/gS62kxQcTIciqItSWqrElDZSCg5qUQv6ceh55vKaxgjycuBw3/ueH99z77v3vFtS6UPGgYvABFANBWiHNoAZ4PVfM6m9tK4u2b8sRcyeOfcy1NRGLtmX5PlRaDebEVvrl3BS3UyCn6hX1K14f6ruUyvqXGBf1cvqbBK3Gbl6Ek6q2xGwop6NxC8Ce6MeTPwPqYthW4hCzqvvAtvOk+aXMZvZijoS+I3APqujXVbkRMxQdSqwY+r7ZKa1boTZN0vJKupa4Le7kGV6N3xaMUuiuGbgjTxh3Y601OvqfvVqYN/VoR6Ew+qP8L2klt35pot2pJ4SZlv/Z+KwnizLvR5kmT4I30V12d2ypFJSx4FXwC/gTBzwKeBIclw3gGXgA9CMUaAGjMZ4GhhJYraAh8BjYB4oAedQp6OCZ0m1B9Q7XarsV+6rh5N8zwOfrkS7AphNqvsGvI3nl8BN4HhOK0Arp7eiDS4An5J8M8EzUaHTF1u5rjcUYxOYoz+5FoTVHN6MsVpOjOs5pwzf6JMs9c0TrqWEhUqZnd8LwHDOluFH/yFf5tvO4dnubVfCeIqdrZ3KxxjHgAvs3jQlYJXOhlkFTu5BOPYHL/pYDOTgF9raBta8C/89DeQHXPgVYyCXqHR5C7smpvrfL8IlLfaq/xsYICW4c1ZAYwAAAABJRU5ErkJggg=='
            },
            thematicLayers:{
                id: "thematic",
                name: "groupLevel1",
                label: gt.gettext("Couches disponibles"),
                layers: [],
                type: "checkbox",
                openOnLoad: true, 
                icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAYAAABlL09dAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAFEwAABRMBWjvKTwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIiSURBVEiJpZZPS1RRGMafGdsZ1kStJQMpKILUldBKXYi1MVA3fYC+gRSB+AWEYFy1aeEmCRX0A7hoURaRA1IwSyEY+4vURv216LnM8c4719FeOJw5z/u8v3vuPX+YEqA2UZF0V9IdSQPuJem9pHfuNyV9D6uBqE0BDU6Ohr0tjFJuxlckVSU98Lgh6bWkLc9Snv2ApGH7JWlZ0iP7W2Z8GdhNZrMInG/zRnJuMfHvmiHgGPilDV+AkQJgvo24BjOOgaeSJ4+dApq1saR+OgNXgD2L1TNAs1Y1Yw+oCJiw0AC6g4KLwALwwW3BWt7XTXMnTQiY82A1MPcAdVqj7lzev+r8XFnSoDfIm2CbP5bUF+h9zuUjYwyWJQ158DYwDgdaUS5jDJUlHXhwLjD+LgBHuYxxUJZU8+BmYNwoAEe5jFFLwbcD4zNJ64G+7lw+MkZN3tAAf4DeYKVLwAzw3G3GWt7XawbAtIAuYNvC0n8ckCUztoGuTBy1eOTfZznSR2aMkruEVpz4Clw9BfQa8M21K5meGi7RPGUfiY93dHXWXFM3owUs4Bawb+My8SKli/rK3n3Xqh1YwGTyvZ4UgJ8m6zKZz7crmk+K7gX5+8nD5yNG0WuuufAncD3J3QB+ObfW7nMVLUwPsGPAJ+AC/+7hz9Z2iK/OE8EC+oEfBm24Ya2/qLaTfToOHNKMQ2uFdZ0egtkEPNtJTf4PS1G8cP+wE/NfIsnDB+2zaOkAAAAASUVORK5CYII='
            }
        },*!/
        element: null,
        target: null
    };
    $.extend(true, opt, options);
    return opt;
};



/!**
 * Built panel displayed when a user click on the button "basemap"
 * @param options
 * @returns {HTMLElement}
 * @private
 *!/
ol.control.Basemaps.prototype._definePanel = function(options) {

    var self = this;
    var panel = document.createElement("div");
    panel.className = "ol-basemaps-panel";
    panel.addEventListener('touchmove', function(e){
        e.stopPropagation();
    }, false);

    var ulGroupLevel1 = document.createElement("ul");
    panel.id = "groupLevel";
    panel.appendChild(ulGroupLevel1);
    ulGroupLevel1.id = "groupMenu";


    $(ulGroupLevel1).on('change', 'input[type="radio"]', function () {
        $('input[name="' + this.name + '"]').parent().removeClass("checked");
        $(this).parent().addClass('checked');
        $("ul.group-layers").addClass("hidden");
        $("#ul-group-layers-" + this.id).removeClass("hidden");
    });

    if (options.hasOwnProperty("panel")) {

        $.each(options.panel, function(key, value) {

            if (value.hasOwnProperty("label")) {

                var liGroupLevel = document.createElement('li');
                liGroupLevel.className = "toggle";
                liGroupLevel.setAttribute("style", "background-image:url(" + value["icon"] + ")");
                ulGroupLevel1.appendChild(liGroupLevel);                
                
                var inputGroupLevel = document.createElement('input');
                inputGroupLevel.id = value["id"];
                inputGroupLevel.type = "radio";
                inputGroupLevel.name = value["name"];
                inputGroupLevel.className = "hidden";
                liGroupLevel.appendChild(inputGroupLevel);
                
                var labelGroupLevel = document.createElement('label');
                labelGroupLevel.htmlFor = value["id"];
                labelGroupLevel.innerHTML = value["label"];
                liGroupLevel.appendChild(labelGroupLevel);
                
                var divGroupLevel = document.createElement('div');
                divGroupLevel.innerHTML = "(" + value["layers"].length + ")";
                liGroupLevel.appendChild(divGroupLevel);
                
                var ulGroupLevel2 = document.createElement("ul");
                ulGroupLevel2.id = "ul-group-layers-" + value["id"];
                ulGroupLevel2.className = "group-layers hidden";
                panel.appendChild(ulGroupLevel2);      
                self.renderLayers_(value["layers"], ulGroupLevel2, value["type"], value["id"]);
                if(value.hasOwnProperty('openOnLoad') && value.openOnLoad === true){
                    inputGroupLevel.checked = true;
                    ulGroupLevel2.className = "group-layers";
                    liGroupLevel.className = "toggle checked";
                }
            }
            
        });
    }
    return panel;
};

/!**
 * Draws the container layers in the panel
 * @param lyrs
 * @param elm
 * @param type
 * @param id
 * @private
 *!/
ol.control.Basemaps.prototype.renderLayers_ = function (lyrs, elm, type, id) {

    for (var i = lyrs.length; i--;) {
        var l = lyrs[i];
        if (l.get('title')) {
            elm.appendChild(this.renderLayer_(l, i, type, id));
        }
    }

    /!*    for (var i = 0, l; i < lyrs.length; i++) {
        l = lyrs[i];
        if (l.get('title')) {
            elm.appendChild(this.renderLayer_(l, i, type, id));
        }
     }*!/
};

/!**
 * Draws the container layers in the panel
 * @param lyr
 * @param idx
 * @param type
 * @param name
 * @returns {HTMLElement}
 * @private
 *!/
ol.control.Basemaps.prototype.renderLayer_ = function(lyr, idx, type, name) {

    var this_ = this;
    
    var lyrTitle = lyr.get('title');
    var string = "pgi";
    var lyrId = string.getUniqueId();

    var li = document.createElement("li");
    if (lyr.get('thumbnail') != undefined) {
        li.setAttribute("style", "background-image:url(" + lyr.get('thumbnail') + ")");
    }else{
        li.className = "thematic";
    }

    if (type=="checkbox") {
        var div = document.createElement("div");
        div.className = "layer";        
    }
    
    var input = document.createElement("input");
    input.type = type;
    input.id = lyrId;
    input.name = name + "-layer";
    if (type=="radio") input.className = "hidden";
    input.checked = lyr.get("visible");
    
    input.onchange = function(e) {
        if (e.target.type == "radio") $(document.getElementsByName(e.target.name)).parent().removeClass("active");
        $(e.target).parent().toggleClass("active");
        this_.setVisible_(lyr, e.target.checked, type);
    };

    var label = document.createElement("label");
    label.htmlFor = lyrId;
    label.innerHTML = lyrTitle;
    
    if (type=="checkbox") {
        div.appendChild(input);
        div.appendChild(label);
        li.appendChild(div);

/!*        var divOption = document.createElement("div");
        divOption.className = "option";
        li.appendChild(divOption);*!/


/!*        divOption.onclick = function(e) {
            var modal = '<div id="myModal" class="modal hide"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <h3>Modal header</h3> </div> <div class="modal-body"> <p>One fine body…</p> </div> <div class="modal-footer"> <a href="#" class="btn">Close</a> <a href="#" class="btn btn-primary">Save changes</a> </div> </div>';
            $(li).append(modal);
            $('#myModal').modal('show') 
        };*!/
        
    }else{
        li.appendChild(input);
        li.appendChild(label);
    }

    return li;

};

/!**
 * Manage layers visibility
 * @param lyr
 * @param visible
 * @param type
 * @private
 *!/
ol.control.Basemaps.prototype.setVisible_ = function(lyr, visible, type) {

    var map = this.getMap();

    if (lyr.get("google") != undefined) {
        
        var googleProps = JSON.parse(lyr.get("google"));
        
        if (googleProps != null) {

            var gmap = this.options.google.object;
            var style =  {
                default:[{
                    featureType: "all",
                    elementType: "all",
                    stylers: [{
                        saturation: 0
                    }]
                }],
                gray:[{
                    featureType: "all",
                    elementType: "all",
                    stylers: [{
                        saturation: -100
                    }]
                }]
            };
     
            visible = false;
            
            switch (googleProps["id"]) {
                
                case "gmap_roadmap":
                    gmap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                    gmap.setOptions({styles: style.default});
                    break;
                
                case "gmap_roadmap_gray":

                    gmap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                    gmap.setOptions({styles: style.gray});
                    
                    break;
                case "gmap_terrain":
                    gmap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                    gmap.setOptions({styles: style.default});
                    break;
                
                case "gmap_satellite":
                    gmap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                    break;
                
                case "gmap_hybrid":
                    gmap.setMapTypeId(google.maps.MapTypeId.HYBRID);
                    break;
            }

        }
    }

    if (type == "radio") {
        this.hideBasemapLayers_(map, lyr);
        this.setMaxZoom_(lyr.get("maxZoom"), map.getView());
    } 
    
    lyr.setVisible(visible);

};

/!**
 * 
 * @param map
 * @param lyr
 * @private
 *!/
ol.control.Basemaps.prototype.hideBasemapLayers_ = function(map, lyr) {
    ol.control.Basemaps.forEachRecursive(map, function (l) {
        if (l != lyr && l.get('type') === "basemap") {
            l.setVisible(false);
        }
    });
};

/!**
 * Sets the maximum zoom range at which the layer can be displayed
 * @param value
 * @param view
 * @private
 *!/
ol.control.Basemaps.prototype.setMaxZoom_ = function(value, view) {
    this.options.view.maxZoom = value;
    if (view.getZoom() > this.options.view.maxZoom) view.setZoom(this.options.view.maxZoom);    
};

/!**
 * **Static** Call the supplied function for each layer in the passed layer group
 * recursing nested groups.
 * @param {ol.layer.Group} lyr The layer group to start iterating from.
 * @param {Function} fn Callback which will be called for each `ol.layer.Base`
 * found under `lyr`. The signature for `fn` is the same as `ol.Collection#forEach`
 *!/
ol.control.Basemaps.forEachRecursive = function(lyr, fn) {
    lyr.getLayers().forEach(function(lyr, idx, a) {
        fn(lyr, idx, a);
        if (lyr.getLayers) {
            ol.control.Basemaps.forEachRecursive(lyr, fn);
        }
    });
};

/!**
 * Show panel contains layers
 * @param target
 *!/
ol.control.Basemaps.prototype.showPanel = function(target) {
    if (this.panel.className != this.shownPanelClassName) {
        this.panel.className = this.shownPanelClassName;
        this.element.className = this.shownClassName;
        $(target).css("width", "350px");
    }else{
        this.hidePanel(target); 
    }
    this.resize();
};

/!**
 * Hide panel contains layers
 * @param target
 *!/
ol.control.Basemaps.prototype.hidePanel = function(target) {
    this.panel.className = this.hiddenPanelClassName;
    this.element.className = this.hiddenClassName;
    $(target).css("width", "auto");
};

/!**
 * 
 * @param map
 *!/
ol.control.Basemaps.prototype.setMap = function(map) {
    
    ol.control.Control.prototype.setMap.call(this, map);
    
    var self = this;
    var view = map.getView();
    
    view.on('change:resolution', function () {
        if (view.getZoom() > self.options.view.maxZoom) view.setZoom(self.options.view.maxZoom);
    });
    
    view.on('change:center', function () {
        self.hidePanel(self.options.target);
    });
};

ol.control.Basemaps.prototype.resize = function() {
    $('.group-layers').height($("#groupLevel").height() - $("#groupMenu").height());
};
*/
