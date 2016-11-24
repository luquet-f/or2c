window.onload = function () {

    Gp.Services.getConfig({
        apiKey: '5ba7zrkmpo0ymyuyi24y552e',
        onSuccess: function (response) {
            loadMap(response);
        }
    });

};

function loadMap(response) {

    console.log(response);

    /*var resolutions = [];
     var matrixIds = [];
     var proj3857 = ol.proj.get('EPSG:3857');
     var maxResolution = ol.extent.getWidth(proj3857.getExtent()) / 256;

     for (var i = 0; i < 18; i++) {
     matrixIds[i] = i.toString();
     resolutions[i] = maxResolution / Math.pow(2, i);
     }

     var tileGrid = new ol.tilegrid.WMTS({
     origin: [-20037508, 20037508],
     resolutions: resolutions,
     matrixIds: matrixIds
     });

     var ignGeographicalMaps = {
     source: new ol.source.WMTS({
     attributions: [new ol.Attribution({
     html: '<a href="http://www.geoportail.fr/" target="_blank"><img src="https://api.ign.fr/geoportail/api/js/latest/theme/geoportal/img/logo_gp.gif"></a>'
     })],
     url: 'http://wxs.ign.fr/' + ignKey + '/wmts',
     layer: 'GEOGRAPHICALGRIDSYSTEMS.MAPS',
     matrixSet: 'PM',
     format: 'image/jpeg',
     projection: 'EPSG:3857',
     tileGrid: tileGrid,
     style: 'normal'
     }),
     basemaps: {
     id: 1,
     title: 'OpenStreetMap grisé',
     alt: 'OpenStreetMap grisé',
     src: 'static/img/thumbnails-aerial.png'
     }
     };*/

    var cartoPositronMap = {
        source: new ol.source.XYZ({
            attributions: new ol.Attribution({
                html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
            }),
            url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
        }),
        basemaps: {
            id: 1,
            title: 'OpenStreetMap grisé',
            alt: 'OpenStreetMap grisé',
            src: 'static/img/thumbnails-aerial.png'
        }
    };

    var cartoDarkMatterMap = {
        source: new ol.source.XYZ({
            attributions: new ol.Attribution({
                html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
            }),
            url: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
        }),
        basemaps: {
            id: 1,
            title: 'OpenStreetMap noir et blanc',
            alt: 'OpenStreetMap noir et blanc',
            src: 'static/img/thumbnails-aerial.png'
        }
    };

    var esriWorldTopoMap = {
        source: new ol.source.XYZ({
            attributions: new ol.Attribution({
                html: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ESRI</a>'
            }),
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
        }),
        basemaps: {
            id: 1,
            title: 'Label 1',
            alt: 'Label 1',
            src: 'static/img/thumbnails-aerial.png'
        }
    };

    var esriWorldTerrainBase = {
        source: new ol.source.XYZ({
            attributions: new ol.Attribution({
                html: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer">ESRI</a>'
            }),
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
        }),
        basemaps: {
            id: 1,
            title: 'Label 1',
            alt: 'Label 1',
            src: 'static/img/thumbnails-aerial.png'
        }
    };

    var esriWorldTStreetMap = {
        source: new ol.source.XYZ({
            attributions: new ol.Attribution({
                html: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer">ESRI</a>'
            }),
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
        }),
        basemaps: {
            id: 1,
            title: 'Label 1',
            alt: 'Label 1',
            src: 'static/img/thumbnails-aerial.png'
        }
    };

    var esriWorldShadedRelief = {
        source: new ol.source.XYZ({
            attributions: new ol.Attribution({
                html: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer">ESRI</a>'
            }),
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
        }),
        basemaps: {
            id: 1,
            title: 'Label 1',
            alt: 'Label 1',
            src: 'static/img/thumbnails-aerial.png'
        }
    };

    var esriWorldPhysicalMap = {
        source: new ol.source.XYZ({
            attributions: new ol.Attribution({
                html: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer">ESRI</a>'
            }),
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
        }),
        basemaps: {
            id: 1,
            title: 'Label 1',
            alt: 'Label 1',
            src: 'static/img/thumbnails-aerial.png'
        }
    };

    var esriImageryWorld2D = {
        source: new ol.source.XYZ({
            attributions: new ol.Attribution({
                html: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/ESRI_Imagery_World_2D/MapServer">ESRI</a>'
            }),
            url: 'https://services.arcgisonline.com/arcgis/rest/services/ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}'
        }),
        basemaps: {
            id: 1,
            title: 'Label 1',
            alt: 'Label 1',
            src: 'static/img/thumbnails-aerial.png'
        }
    };

    var esriStreetWorld2D = {
        source: new ol.source.XYZ({
            attributions: new ol.Attribution({
                html: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer">ESRI</a>'
            }),
            url: 'https://services.arcgisonline.com/arcgis/rest/services/ESRI_StreetMap_World_2D/MapServer/tile/{z}/{y}/{x}'
        }),
        basemaps: {
            id: 1,
            title: 'Label 1',
            alt: 'Label 1',
            src: 'static/img/thumbnails-aerial.png'
        }
    };

    var basemapLayers = [cartoPositronMap, cartoDarkMatterMap, esriWorldTerrainBase, esriWorldTStreetMap, esriWorldTopoMap, esriWorldShadedRelief, esriWorldPhysicalMap, esriImageryWorld2D, esriStreetWorld2D];

    var map = new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: esriWorldTerrainBase.source,
                type: 'basemaps'
            })
        ],
        target: 'map',
        controls: [],
        view: new ol.View({
            center: [0, 0],
            zoom: 2
        })
    });

    /**
     * Extent the map on all PAPI sectors
     */
    var fullExtent = [-292220.5, 5823165.289999999, -59902.59, 6026713.399999994];
    map.getView().fit(fullExtent, map.getSize());

    var layerCommunesPapi = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: 'data/communes_papi.geojson',
            format: new ol.format.GeoJSON({
                defaultDataProjection: 'EPSG:4326',
                projection: 'EPSG:3857'

            })
        }),
        name: 'Communes PAPI',
        style: function (feature) {

            /*        var color = ol.color.asArray(feature.get('papi_color'));
             var colors = color.slice();
             colors[3] = 0.8;*/


            return new ol.style.Style({
                fill: new ol.style.Fill({
                    color: feature.get('papi_color')
                }),
                stroke: new ol.style.Stroke({
                    color: '#FFFFFF',
                    width: 1
                })
            });
        }
    });

    var layerPapi = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: 'data/papi.geojson',
            format: new ol.format.GeoJSON({
                defaultDataProjection: 'EPSG:4326',
                projection: 'EPSG:3857'
            })
        }),
        name: 'Secteurs PAPI',
        style: function () {
            return new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(255,255,255,0.1)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(128,128,128,1)',
                    width: 1.5
                })
            });
        }
    });


    map.addLayer(layerCommunesPapi);
    map.addLayer(layerPapi);

    /**
     * Add a control on the map to the corner position
     */
    var topRightControlContainer = addCornerControls('top-right');
    map.addControl(topRightControlContainer);

    /**
     * Add a control on the map to the corner position
     */
    var topLeftControlContainer = addCornerControls('top-left');
    map.addControl(topLeftControlContainer);

    /**
     * Add default zoom controls on the map
     */
    map.addControl(new ol.control.Zoom({
        target: topRightControlContainer['element'],
        className: 'ol-zoom ol-fluid'
    }));

    /**
     * Add zoom to extent control on the map
     */
    var nodeZoomToExtent = document.createElement('span');
    nodeZoomToExtent.className = 'glyphicon glyphicon-fullscreen';
    map.addControl(new ol.control.ZoomToExtent({
        target: topRightControlContainer['element'],
        extent: fullExtent,
        className: 'ol-zoom-extent ol-fluid',
        label: nodeZoomToExtent
    }));

    /**
     * Add full screen control on the map
     */
    var nodeFullScreen = document.createElement('span');
    nodeFullScreen.className = 'glyphicon glyphicon-resize-full';
    map.addControl(new ol.control.FullScreen({
        target: topRightControlContainer['element'],
        className: 'ol-full-screen ol-fluid',
        label: nodeFullScreen
    }));

    /**
     * Add retractable panel control on the map
     */
    var nodePanel = document.createElement('span');
    nodePanel.className = 'glyphicon glyphicon-th-list';
    map.addControl(new ol.control.Panel({
        target: topLeftControlContainer['element'],
        className: 'ol-panel ol-fluid',
        label: nodePanel,
        button: {
            title: {
                panelClose: 'Ouvrir',
                panelOpen: 'Fermer'
            }
        },
        panel: {
            openOnLoad: true
        }
    }));

    /**
     * Add basemaps control outside the map
     */
    var basemapsControl = new ol.control.Basemaps({
        panel: {
            layers: basemapLayers
        },
        target: document.getElementById("basemapsTarget")
    });

    map.addControl(basemapsControl);

    /**
     *
     * @type {ol.control.MousePosition}
     */
    var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: function(coordinate) {
            return ol.coordinate.format(coordinate, 'x : {x}   y : {y}', 4);
        },
        projection: 'EPSG:4326',
        className: 'custom-mouse-position',
        target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp;'
    });

    map.addControl(mousePositionControl);

    var elements = document.getElementsByClassName('epsg');

    for (var i = 0, len = elements.length; i < len; i++) {
        console.log(elements[i]);
        elements[i].addEventListener('click', function(event) {
            console.log(event.target);
            mousePositionControl.setProjection(ol.proj.get(event.target.value));
        });
    }

}

/**
 * Create a control panel on the map to a specific fixed position
 * @param {string} controlPosition
 * @returns {ol.control.Control}
 */
function addCornerControls(controlPosition) {

    var controlElement = document.createElement('div');
    controlElement.className = controlPosition;

    return new ol.control.Control({
        element: controlElement
    });

}





/**
 * Calculate extent of all features from a vector layer
 * @param {ol.layer.Vector} layer
 * @param {ol.Map} map
 */
/*
 function zoomExtentFromVectorLayer (layer, map) {
 var source = layer.getSource();
 source.once('change',function(){
 if(source.getState() === 'ready') {
 if(source.getFeatures().length>0) {
 map.getView().fit(source.getExtent(), map.getSize());
 }
 }
 });
 }
 */
