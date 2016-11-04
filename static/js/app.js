
var basemapSource =new ol.source.XYZ({
    attributions: new ol.Attribution({
        html: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ESRI</a>'
    }),
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
});

/*    new ol.source.XYZ('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png');*/

var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: basemapSource
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
var fullExtent = [-292220.5,5823165.289999999,-59902.59,6026713.399999994];
map.getView().fit(fullExtent, map.getSize());

var layerCommunesPapi = new ol.layer.Vector({
    source: new ol.source.Vector ({
        url: 'data/communes_papi.geojson',
        format: new ol.format.GeoJSON({
            defaultDataProjection :'EPSG:4326',
            projection: 'EPSG:3857'

        })
    }),
    name: 'Communes PAPI',
    style: function(feature) {

/*        var color = ol.color.asArray(feature.get('papi_color'));
        var colors = color.slice();
        colors[3] = 0.8;*/
console.log(feature.get('papi_color'));

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
    source: new ol.source.Vector ({
        url: 'data/papi.geojson',
        format: new ol.format.GeoJSON({
            defaultDataProjection :'EPSG:4326',
            projection: 'EPSG:3857'
        })
    }),
    name: 'Secteurs PAPI',
    style: function() {
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
