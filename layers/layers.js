var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COVIDDATA_1 = new ol.format.GeoJSON();
var features_COVIDDATA_1 = format_COVIDDATA_1.readFeatures(json_COVIDDATA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COVIDDATA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COVIDDATA_1.addFeatures(features_COVIDDATA_1);
var lyr_COVIDDATA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COVIDDATA_1, 
                style: style_COVIDDATA_1,
                interactive: true,
                title: '<img src="styles/legend/COVIDDATA_1.png" /> COVID-DATA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_COVIDDATA_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_COVIDDATA_1];
lyr_COVIDDATA_1.set('fieldAliases', {'SA1_MAIN16': 'SA1_MAIN16', 'SA2_NAME16': 'SA2_NAME16', 'SA3_NAME16': 'SA3_NAME16', 'SA4_NAME16': 'SA4_NAME16', 'GCC_NAME16': 'GCC_NAME16', 'STE_NAME16': 'STE_NAME16', 'LST_pre_lo': 'LST_pre_lo', 'LST_post_l': 'LST_post_l', 'LST_change': 'LST_change', 'NDVI_pre_l': 'NDVI_pre_l', 'NDVI_post': 'NDVI_post', 'NDVI_chang': 'NDVI_chang', 'NDBI_pre_l': 'NDBI_pre_l', 'NDBI_post': 'NDBI_post', 'NDBI_chang': 'NDBI_chang', 'AOD_pre_lo': 'AOD_pre_lo', 'AOD_post_l': 'AOD_post_l', 'AOD_change': 'AOD_change', 'CO_pre_loc': 'CO_pre_loc', 'CO_post_lo': 'CO_post_lo', 'CO_changes': 'CO_changes', 'NO2_pre_lo': 'NO2_pre_lo', 'NO2_post_l': 'NO2_post_l', 'NO2_change': 'NO2_change', 'Cluster_ID': 'Cluster_ID', });
lyr_COVIDDATA_1.set('fieldImages', {'SA1_MAIN16': 'TextEdit', 'SA2_NAME16': 'TextEdit', 'SA3_NAME16': 'TextEdit', 'SA4_NAME16': 'TextEdit', 'GCC_NAME16': 'TextEdit', 'STE_NAME16': 'TextEdit', 'LST_pre_lo': 'TextEdit', 'LST_post_l': 'TextEdit', 'LST_change': 'TextEdit', 'NDVI_pre_l': 'TextEdit', 'NDVI_post': 'TextEdit', 'NDVI_chang': 'TextEdit', 'NDBI_pre_l': 'TextEdit', 'NDBI_post': 'TextEdit', 'NDBI_chang': 'TextEdit', 'AOD_pre_lo': 'TextEdit', 'AOD_post_l': 'TextEdit', 'AOD_change': 'TextEdit', 'CO_pre_loc': 'TextEdit', 'CO_post_lo': 'TextEdit', 'CO_changes': 'TextEdit', 'NO2_pre_lo': 'TextEdit', 'NO2_post_l': 'TextEdit', 'NO2_change': 'TextEdit', 'Cluster_ID': 'TextEdit', });
lyr_COVIDDATA_1.set('fieldLabels', {'SA1_MAIN16': 'no label', 'SA2_NAME16': 'no label', 'SA3_NAME16': 'no label', 'SA4_NAME16': 'no label', 'GCC_NAME16': 'no label', 'STE_NAME16': 'no label', 'LST_pre_lo': 'header label', 'LST_post_l': 'header label', 'LST_change': 'no label', 'NDVI_pre_l': 'header label', 'NDVI_post': 'header label', 'NDVI_chang': 'no label', 'NDBI_pre_l': 'header label', 'NDBI_post': 'header label', 'NDBI_chang': 'no label', 'AOD_pre_lo': 'header label', 'AOD_post_l': 'header label', 'AOD_change': 'no label', 'CO_pre_loc': 'header label', 'CO_post_lo': 'header label', 'CO_changes': 'no label', 'NO2_pre_lo': 'header label', 'NO2_post_l': 'header label', 'NO2_change': 'no label', 'Cluster_ID': 'no label', });
lyr_COVIDDATA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});