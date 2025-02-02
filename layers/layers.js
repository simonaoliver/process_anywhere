var wms_layers = [];

var lyr_default_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ows.terrestris.de/osm/service",
                              attributions: ' ',
                              params: {
                                "LAYERS": "TOPO-WMS",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'default',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_default_0, 0]);
var format_aeronet_locations_v3_1 = new ol.format.GeoJSON();
var features_aeronet_locations_v3_1 = format_aeronet_locations_v3_1.readFeatures(json_aeronet_locations_v3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aeronet_locations_v3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aeronet_locations_v3_1.addFeatures(features_aeronet_locations_v3_1);
cluster_aeronet_locations_v3_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_aeronet_locations_v3_1
});
var lyr_aeronet_locations_v3_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_aeronet_locations_v3_1, 
                style: style_aeronet_locations_v3_1,
                popuplayertitle: 'aeronet_locations_v3',
                interactive: true,
                title: '<img src="styles/legend/aeronet_locations_v3_1.png" /> aeronet_locations_v3'
            });
var format_ceos_pics_instrumented_scenes_2 = new ol.format.GeoJSON();
var features_ceos_pics_instrumented_scenes_2 = format_ceos_pics_instrumented_scenes_2.readFeatures(json_ceos_pics_instrumented_scenes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ceos_pics_instrumented_scenes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ceos_pics_instrumented_scenes_2.addFeatures(features_ceos_pics_instrumented_scenes_2);
var lyr_ceos_pics_instrumented_scenes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ceos_pics_instrumented_scenes_2, 
                style: style_ceos_pics_instrumented_scenes_2,
                popuplayertitle: 'ceos_pics_instrumented_scenes',
                interactive: true,
                title: '<img src="styles/legend/ceos_pics_instrumented_scenes_2.png" /> ceos_pics_instrumented_scenes'
            });
var format_ceos_pics_instrumented_3 = new ol.format.GeoJSON();
var features_ceos_pics_instrumented_3 = format_ceos_pics_instrumented_3.readFeatures(json_ceos_pics_instrumented_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ceos_pics_instrumented_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ceos_pics_instrumented_3.addFeatures(features_ceos_pics_instrumented_3);
var lyr_ceos_pics_instrumented_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ceos_pics_instrumented_3, 
                style: style_ceos_pics_instrumented_3,
                popuplayertitle: 'ceos_pics_instrumented',
                interactive: true,
                title: '<img src="styles/legend/ceos_pics_instrumented_3.png" /> ceos_pics_instrumented'
            });
var format_GA_NBART_4 = new ol.format.GeoJSON();
var features_GA_NBART_4 = format_GA_NBART_4.readFeatures(json_GA_NBART_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GA_NBART_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GA_NBART_4.addFeatures(features_GA_NBART_4);
var lyr_GA_NBART_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GA_NBART_4, 
                style: style_GA_NBART_4,
                popuplayertitle: 'GA_NBART',
                interactive: true,
                title: '<img src="styles/legend/GA_NBART_4.png" /> GA_NBART'
            });
var format_GA_NBAR_5 = new ol.format.GeoJSON();
var features_GA_NBAR_5 = format_GA_NBAR_5.readFeatures(json_GA_NBAR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GA_NBAR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GA_NBAR_5.addFeatures(features_GA_NBAR_5);
var lyr_GA_NBAR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GA_NBAR_5, 
                style: style_GA_NBAR_5,
                popuplayertitle: 'GA_NBAR',
                interactive: true,
                title: '<img src="styles/legend/GA_NBAR_5.png" /> GA_NBAR'
            });
var format_USGS_NBART_6 = new ol.format.GeoJSON();
var features_USGS_NBART_6 = format_USGS_NBART_6.readFeatures(json_USGS_NBART_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USGS_NBART_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USGS_NBART_6.addFeatures(features_USGS_NBART_6);
var lyr_USGS_NBART_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USGS_NBART_6, 
                style: style_USGS_NBART_6,
                popuplayertitle: 'USGS_NBART',
                interactive: true,
                title: '<img src="styles/legend/USGS_NBART_6.png" /> USGS_NBART'
            });
var format_USGS_NBAR_7 = new ol.format.GeoJSON();
var features_USGS_NBAR_7 = format_USGS_NBAR_7.readFeatures(json_USGS_NBAR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USGS_NBAR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USGS_NBAR_7.addFeatures(features_USGS_NBAR_7);
var lyr_USGS_NBAR_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USGS_NBAR_7, 
                style: style_USGS_NBAR_7,
                popuplayertitle: 'USGS_NBAR',
                interactive: true,
                title: '<img src="styles/legend/USGS_NBAR_7.png" /> USGS_NBAR'
            });

lyr_default_0.setVisible(true);lyr_aeronet_locations_v3_1.setVisible(true);lyr_ceos_pics_instrumented_scenes_2.setVisible(true);lyr_ceos_pics_instrumented_3.setVisible(true);lyr_GA_NBART_4.setVisible(true);lyr_GA_NBAR_5.setVisible(true);lyr_USGS_NBART_6.setVisible(true);lyr_USGS_NBAR_7.setVisible(true);
var layersList = [lyr_default_0,lyr_aeronet_locations_v3_1,lyr_ceos_pics_instrumented_scenes_2,lyr_ceos_pics_instrumented_3,lyr_GA_NBART_4,lyr_GA_NBAR_5,lyr_USGS_NBART_6,lyr_USGS_NBAR_7];
lyr_aeronet_locations_v3_1.set('fieldAliases', {'Site_Name': 'Site_Name', 'Longitude(decimal_degrees)': 'Longitude(decimal_degrees)', 'Latitude(decimal_degrees)': 'Latitude(decimal_degrees)', 'Elevation(meters)': 'Elevation(meters)', });
lyr_ceos_pics_instrumented_scenes_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PR_': 'PR_', 'PR_ID': 'PR_ID', 'RINGS_OK': 'RINGS_OK', 'RINGS_NOK': 'RINGS_NOK', 'PATH': 'PATH', 'ROW': 'ROW', 'MODE': 'MODE', 'SEQUENCE': 'SEQUENCE', 'WRSPR': 'WRSPR', 'PR': 'PR', 'ACQDayL7': 'ACQDayL7', 'ACQDayL8': 'ACQDayL8', });
lyr_ceos_pics_instrumented_3.set('fieldAliases', {'name': 'name', 'y': 'y', 'x': 'x', 'type': 'type', });
lyr_GA_NBART_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PR_': 'PR_', 'PR_ID': 'PR_ID', 'RINGS_OK': 'RINGS_OK', 'RINGS_NOK': 'RINGS_NOK', 'PATH': 'PATH', 'ROW': 'ROW', 'MODE': 'MODE', 'SEQUENCE': 'SEQUENCE', 'WRSPR': 'WRSPR', 'PR': 'PR', 'ACQDayL7': 'ACQDayL7', 'ACQDayL8': 'ACQDayL8', });
lyr_GA_NBAR_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PR_': 'PR_', 'PR_ID': 'PR_ID', 'RINGS_OK': 'RINGS_OK', 'RINGS_NOK': 'RINGS_NOK', 'PATH': 'PATH', 'ROW': 'ROW', 'MODE': 'MODE', 'SEQUENCE': 'SEQUENCE', 'WRSPR': 'WRSPR', 'PR': 'PR', 'ACQDayL7': 'ACQDayL7', 'ACQDayL8': 'ACQDayL8', });
lyr_USGS_NBART_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PR_': 'PR_', 'PR_ID': 'PR_ID', 'RINGS_OK': 'RINGS_OK', 'RINGS_NOK': 'RINGS_NOK', 'PATH': 'PATH', 'ROW': 'ROW', 'MODE': 'MODE', 'SEQUENCE': 'SEQUENCE', 'WRSPR': 'WRSPR', 'PR': 'PR', 'ACQDayL7': 'ACQDayL7', 'ACQDayL8': 'ACQDayL8', });
lyr_USGS_NBAR_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PR_': 'PR_', 'PR_ID': 'PR_ID', 'RINGS_OK': 'RINGS_OK', 'RINGS_NOK': 'RINGS_NOK', 'PATH': 'PATH', 'ROW': 'ROW', 'MODE': 'MODE', 'SEQUENCE': 'SEQUENCE', 'WRSPR': 'WRSPR', 'PR': 'PR', 'ACQDayL7': 'ACQDayL7', 'ACQDayL8': 'ACQDayL8', });
lyr_aeronet_locations_v3_1.set('fieldImages', {'Site_Name': 'TextEdit', 'Longitude(decimal_degrees)': 'TextEdit', 'Latitude(decimal_degrees)': 'TextEdit', 'Elevation(meters)': 'TextEdit', });
lyr_ceos_pics_instrumented_scenes_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PR_': 'TextEdit', 'PR_ID': 'TextEdit', 'RINGS_OK': 'TextEdit', 'RINGS_NOK': 'TextEdit', 'PATH': 'TextEdit', 'ROW': 'TextEdit', 'MODE': 'TextEdit', 'SEQUENCE': 'TextEdit', 'WRSPR': 'TextEdit', 'PR': 'TextEdit', 'ACQDayL7': 'TextEdit', 'ACQDayL8': 'TextEdit', });
lyr_ceos_pics_instrumented_3.set('fieldImages', {'name': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'type': 'TextEdit', });
lyr_GA_NBART_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PR_': 'TextEdit', 'PR_ID': 'TextEdit', 'RINGS_OK': 'TextEdit', 'RINGS_NOK': 'TextEdit', 'PATH': 'TextEdit', 'ROW': 'TextEdit', 'MODE': 'TextEdit', 'SEQUENCE': 'TextEdit', 'WRSPR': 'TextEdit', 'PR': 'TextEdit', 'ACQDayL7': 'TextEdit', 'ACQDayL8': 'TextEdit', });
lyr_GA_NBAR_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PR_': 'TextEdit', 'PR_ID': 'TextEdit', 'RINGS_OK': 'TextEdit', 'RINGS_NOK': 'TextEdit', 'PATH': 'TextEdit', 'ROW': 'TextEdit', 'MODE': 'TextEdit', 'SEQUENCE': 'TextEdit', 'WRSPR': 'TextEdit', 'PR': 'TextEdit', 'ACQDayL7': 'TextEdit', 'ACQDayL8': 'TextEdit', });
lyr_USGS_NBART_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PR_': 'TextEdit', 'PR_ID': 'TextEdit', 'RINGS_OK': 'TextEdit', 'RINGS_NOK': 'TextEdit', 'PATH': 'TextEdit', 'ROW': 'TextEdit', 'MODE': 'TextEdit', 'SEQUENCE': 'TextEdit', 'WRSPR': 'TextEdit', 'PR': 'TextEdit', 'ACQDayL7': 'TextEdit', 'ACQDayL8': 'TextEdit', });
lyr_USGS_NBAR_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PR_': 'TextEdit', 'PR_ID': 'TextEdit', 'RINGS_OK': 'TextEdit', 'RINGS_NOK': 'TextEdit', 'PATH': 'TextEdit', 'ROW': 'TextEdit', 'MODE': 'TextEdit', 'SEQUENCE': 'TextEdit', 'WRSPR': 'TextEdit', 'PR': 'TextEdit', 'ACQDayL7': 'TextEdit', 'ACQDayL8': 'TextEdit', });
lyr_aeronet_locations_v3_1.set('fieldLabels', {'Site_Name': 'no label', 'Longitude(decimal_degrees)': 'no label', 'Latitude(decimal_degrees)': 'no label', 'Elevation(meters)': 'no label', });
lyr_ceos_pics_instrumented_scenes_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PR_': 'no label', 'PR_ID': 'no label', 'RINGS_OK': 'no label', 'RINGS_NOK': 'no label', 'PATH': 'no label', 'ROW': 'no label', 'MODE': 'no label', 'SEQUENCE': 'no label', 'WRSPR': 'no label', 'PR': 'no label', 'ACQDayL7': 'no label', 'ACQDayL8': 'no label', });
lyr_ceos_pics_instrumented_3.set('fieldLabels', {'name': 'no label', 'y': 'no label', 'x': 'no label', 'type': 'no label', });
lyr_GA_NBART_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'PR_': 'no label', 'PR_ID': 'no label', 'RINGS_OK': 'no label', 'RINGS_NOK': 'no label', 'PATH': 'no label', 'ROW': 'no label', 'MODE': 'no label', 'SEQUENCE': 'no label', 'WRSPR': 'no label', 'PR': 'no label', 'ACQDayL7': 'no label', 'ACQDayL8': 'no label', });
lyr_GA_NBAR_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'PR_': 'no label', 'PR_ID': 'no label', 'RINGS_OK': 'no label', 'RINGS_NOK': 'no label', 'PATH': 'no label', 'ROW': 'no label', 'MODE': 'no label', 'SEQUENCE': 'no label', 'WRSPR': 'no label', 'PR': 'no label', 'ACQDayL7': 'no label', 'ACQDayL8': 'no label', });
lyr_USGS_NBART_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'PR_': 'no label', 'PR_ID': 'no label', 'RINGS_OK': 'no label', 'RINGS_NOK': 'no label', 'PATH': 'no label', 'ROW': 'no label', 'MODE': 'no label', 'SEQUENCE': 'no label', 'WRSPR': 'no label', 'PR': 'no label', 'ACQDayL7': 'no label', 'ACQDayL8': 'no label', });
lyr_USGS_NBAR_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'PR_': 'no label', 'PR_ID': 'no label', 'RINGS_OK': 'no label', 'RINGS_NOK': 'no label', 'PATH': 'no label', 'ROW': 'no label', 'MODE': 'no label', 'SEQUENCE': 'no label', 'WRSPR': 'no label', 'PR': 'no label', 'ACQDayL7': 'no label', 'ACQDayL8': 'no label', });
lyr_USGS_NBAR_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});