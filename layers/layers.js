var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GegevenskaartAJH_1 = new ol.format.GeoJSON();
var features_GegevenskaartAJH_1 = format_GegevenskaartAJH_1.readFeatures(json_GegevenskaartAJH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GegevenskaartAJH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GegevenskaartAJH_1.addFeatures(features_GegevenskaartAJH_1);
var lyr_GegevenskaartAJH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GegevenskaartAJH_1, 
                style: style_GegevenskaartAJH_1,
                popuplayertitle: 'Gegevens kaart AJH',
                interactive: true,
    title: 'Gegevens kaart AJH<br />\
    <img src="styles/legend/GegevenskaartAJH_1_0.png" /> CJB<br />\
    <img src="styles/legend/GegevenskaartAJH_1_1.png" /> Detentiehuis<br />\
    <img src="styles/legend/GegevenskaartAJH_1_2.png" /> Gevangenis<br />\
    <img src="styles/legend/GegevenskaartAJH_1_3.png" /> Hoofdzetel<br />\
    <img src="styles/legend/GegevenskaartAJH_1_4.png" /> Justitiehuis<br />\
    <img src="styles/legend/GegevenskaartAJH_1_5.png" /> Transitiehuis<br />'
        });
var format_qgis_geojsontest2_2 = new ol.format.GeoJSON();
var features_qgis_geojsontest2_2 = format_qgis_geojsontest2_2.readFeatures(json_qgis_geojsontest2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qgis_geojsontest2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qgis_geojsontest2_2.addFeatures(features_qgis_geojsontest2_2);
var lyr_qgis_geojsontest2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qgis_geojsontest2_2, 
                style: style_qgis_geojsontest2_2,
                popuplayertitle: 'qgis_geojsontest2',
                interactive: true,
                title: '<img src="styles/legend/qgis_geojsontest2_2.png" /> qgis_geojsontest2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GegevenskaartAJH_1.setVisible(true);lyr_qgis_geojsontest2_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GegevenskaartAJH_1,lyr_qgis_geojsontest2_2];
lyr_GegevenskaartAJH_1.set('fieldAliases', {'Locatie_desc': 'Locatie_desc', 'Locatie_adres': 'Locatie_adres', 'Locatie_Y': 'Locatie_Y', 'Locatie_X': 'Locatie_X', 'Cat_nr': 'Cat_nr', 'Cat_desc': 'Cat_desc', 'Contact1_desc': 'Contact1_desc', 'Contact1_mail': 'Contact1_mail', 'Contact2_desc': 'Contact2_desc', 'Contact2_mail': 'Contact2_mail', });
lyr_qgis_geojsontest2_2.set('fieldAliases', {'Locatie_desc': 'Locatie_desc', 'Locatie_adres': 'Locatie_adres', 'Locatie_Y': 'Locatie_Y', 'Locatie_X': 'Locatie_X', 'Cat_nr': 'Cat_nr', 'Cat_desc': 'Cat_desc', 'Contact1_desc': 'Contact1_desc', 'Contact1_mail': 'Contact1_mail', 'Contact2_desc': 'Contact2_desc', 'Contact2_mail': 'Contact2_mail', });
lyr_GegevenskaartAJH_1.set('fieldImages', {'Locatie_desc': 'TextEdit', 'Locatie_adres': 'TextEdit', 'Locatie_Y': 'TextEdit', 'Locatie_X': 'TextEdit', 'Cat_nr': 'Range', 'Cat_desc': 'TextEdit', 'Contact1_desc': 'TextEdit', 'Contact1_mail': 'TextEdit', 'Contact2_desc': 'TextEdit', 'Contact2_mail': 'TextEdit', });
lyr_qgis_geojsontest2_2.set('fieldImages', {'Locatie_desc': '', 'Locatie_adres': '', 'Locatie_Y': '', 'Locatie_X': '', 'Cat_nr': '', 'Cat_desc': '', 'Contact1_desc': '', 'Contact1_mail': '', 'Contact2_desc': '', 'Contact2_mail': '', });
lyr_GegevenskaartAJH_1.set('fieldLabels', {'Locatie_desc': 'no label', 'Locatie_adres': 'no label', 'Locatie_Y': 'no label', 'Locatie_X': 'no label', 'Cat_nr': 'no label', 'Cat_desc': 'no label', 'Contact1_desc': 'no label', 'Contact1_mail': 'no label', 'Contact2_desc': 'no label', 'Contact2_mail': 'no label', });
lyr_qgis_geojsontest2_2.set('fieldLabels', {'Locatie_desc': 'no label', 'Locatie_adres': 'no label', 'Locatie_Y': 'no label', 'Locatie_X': 'no label', 'Cat_nr': 'no label', 'Cat_desc': 'no label', 'Contact1_desc': 'no label', 'Contact1_mail': 'no label', 'Contact2_desc': 'no label', 'Contact2_mail': 'no label', });
lyr_qgis_geojsontest2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});