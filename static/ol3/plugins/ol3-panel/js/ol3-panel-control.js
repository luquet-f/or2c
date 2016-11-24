/**
 * Control displaying a retractable panel
 * @param opt
 * @constructor
 */
ol.control.Panel = function(opt) {

    var options = this.options = this._defineOptions(opt);

    /**
     * Defined generic classnames for this control
     * @type {string}
     */
    this.hiddenClassName = options.className + " ol-unselectable ol-control";
    this.shownClassName = this.hiddenClassName + " shown";
    this.hiddenPanelClassName = "ol-panel-contenair";
    this.shownPanelClassName = this.hiddenPanelClassName + " shown";

    /**
     * Create the contenair element
     * @type {HTMLElement}
     */
    this.panel = this._definePanel();
    options.target.appendChild(this.panel);

    var ulGroupLayers = this._defineGroupLayers();
    this.panel.appendChild(ulGroupLayers);

    $(this.panel).on('change', 'input[name="inputGroup"]', function () {
        $('.li-group-layers').removeClass("checked");
        $(this).parent().addClass('checked');
        $('ul.group-layers').addClass("hidden");
        $(".group-layers." + $(this).val()).removeClass("hidden");
    });

    /**
     * Create the button element
     * @type {Element}
     */
    var element = this.element = document.createElement("div");
    element.className = this.hiddenClassName;

    this.button = this._defineButton(options);
    element.appendChild(this.button);

    this.button.addEventListener("click", function() {
        this.showPanel(this.options)
    }.bind(this), false);

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });

};

ol.inherits(ol.control.Panel, ol.control.Control);

/**
 * Update and extend options
 * @param options
 * @returns {{target: null, button: {title: {panelClose: string, panelOpen: string}}, panel: {openOnLoad: boolean}}}
 * @private
 */
ol.control.Panel.prototype._defineOptions = function(options)
{
    var opt = {
        target: null,
        button: {
            title: {
                panelClose: 'Ouvrir',
                panelOpen: 'Fermer'
            }
        },
        view: {
            maxZoom: 21
        },
        panel: {
            openOnLoad: true
        },
        label: null
    };
    $.extend(true, opt, options);
    return opt;
};

/**
 * Define button displayed on map
 * @returns {HTMLElement}
 * @private
 */
ol.control.Panel.prototype._defineButton = function(options)
{

    var button = document.createElement("button");
    button.innerHTML = options.label;
    button.type = "button";
    return button;
};

/**
 * Built panel displayed when a user click on the button
 * @returns {Element}
 * @private
 */
ol.control.Panel.prototype._definePanel = function()
{
    var panel = document.createElement("div");
    panel.className = this.hiddenPanelClassName;
    panel.addEventListener('touchmove', function(e){
        e.stopPropagation();
    }, false);
    return panel;
};

/**
 * Built an ul element used to displayed group of layers
 * @returns {Element}
 * @private
 */
ol.control.Panel.prototype._defineGroupLayers = function()
{
    var ul = document.createElement('ul');
    ul.id = "ulGroupLayers";
    ul.className = 'ul-group-layers';
    return ul;
};

/**
 * Show panel contains layers
 */
ol.control.Panel.prototype.showPanel = function()
{
    if (this.panel.className != this.shownPanelClassName) {
        this.panel.className = this.shownPanelClassName;
        this.element.className = this.shownClassName;
        this.options.target.style.height = '100%';
    }else{
        this.hidePanel();
    }
};

/**
 * Hide panel contains layers
 */
ol.control.Panel.prototype.hidePanel = function()
{
    this.panel.className = this.hiddenPanelClassName;
    this.element.className = this.hiddenClassName;
    this.options.target.style.height = '';
};

/**
 *
 * @param map
 */
ol.control.Panel.prototype.setMap = function(map)
{

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