/**
 * Defined default basemaps layers
 */

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

var basemapLayers = [esriWorldTerrainBase, esriWorldTStreetMap, esriWorldTopoMap, esriWorldShadedRelief, esriWorldPhysicalMap, esriImageryWorld2D, esriStreetWorld2D];


var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: esriWorldTStreetMap.source,
            type: 'basemaps'
        })
    ],
    target: 'map',
    controls: ol.control.defaults({
        attributionOptions: ({
            collapsible: false
        })
    }),
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

map.addControl(new ol.control.ZoomToExtent({
    extent: fullExtent
}));




/**
 * Load ol3-basemaps-control on the map
 */
var basemapsControl = new ol.control.Basemaps({
    panel: {
        layers: basemapLayers
    },
    target: document.getElementById("basemapsTarget")
});

map.addControl(basemapsControl);


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
