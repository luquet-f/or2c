/**
 * Control used to display
 * @param opt
 * @constructor
 */
/**
 *
 * @param opt
 * @constructor
 */
ol.control.MousePositionCustom = function(opt) {
console.log(opt);
    var options = this.options = this._defineOptions(opt);

    ol.control.Control.call(this, {
        target: options.target
    });

};

ol.inherits(ol.control.MousePosition, ol.control.Control);

/**
 * Update and extend options
 * @param options
 * @returns {{coordinateFormat: ol.coordinate, projection: string, className: string, target: null, undefinedHTML: string}}
 * @private
 */
ol.control.MousePositionCustom.prototype._defineOptions = function(options) {
    var opt = {
        coordinateFormat: ol.coordinate,
        projection: 'EPSG:4326',
        className: 'ol-mouse-position',
        target: null,
        undefinedHTML: '&nbsp;'
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
ol.control.MousePositionCustom.prototype._defineElement = function(options) {

    var self = this;

    var ul = document.createElement('ul');
    ul.className = 'dropdown-menu ol-control ' + options.className;
    ul.setAttribute("aria-labelledby", 'dropdownMenu1');

    var divFluid = document.createElement('div');
    divFluid.className = 'container-fluid';

    var div = document.createElement('div');
    div.className = 'row';

    options.panel.layers.forEach(function(item) {
        if (item.hasOwnProperty('basemaps')) {

            var divCol = document.createElement('div');
            divCol.className = 'col-xs-3';

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
            div.appendChild(divCol);


        }

    });

    divFluid.appendChild(div);


/*
    var li = document.createElement('li');
    li.innerHTML = 'Action';
    ul.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = 'dfsd';
    ul.appendChild(li);
    ul.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = 'ghgjghj';*/
    //ul.innerHTML = '<div class = "row"> <div class = "col-sm-6 col-md-3"> <a href = "#" class = "thumbnail"> <img src = "/bootstrap/images/kittens.jpg" alt = "Generic placeholder thumbnail"> </a> </div> <div class = "col-sm-6 col-md-3"> <a href = "#" class = "thumbnail"> <img src = "/bootstrap/images/kittens.jpg" alt = "Generic placeholder thumbnail"> </a> </div> <div class = "col-sm-6 col-md-3"> <a href = "#" class = "thumbnail"> <img src = "/bootstrap/images/kittens.jpg" alt = "Generic placeholder thumbnail"> </a> </div> <div class = "col-sm-6 col-md-3"> <a href = "#" class = "thumbnail"> <img src = "/bootstrap/images/kittens.jpg" alt = "Generic placeholder thumbnail"> </a> </div> </div>';


    ul.appendChild(divFluid);
    return ul;
};

/**
 * Defined mp object
 * @param map
 */
ol.control.MousePositionCustom.prototype.setMap = function(map) {
    ol.control.Control.prototype.setMap.call(this, map);
};