
//load data
var url = "https://raw.githubusercontent.com/DaisyXu77/620final/master/hex1000change.geojson";

// Some data to render. The IDs are the NUTS area IDs



map.on('load', function() {
  // Insert the layer beneath any symbol layer.
 var layers = map.getStyle().layers;

 var labelLayerId;
 for (var i = 0; i < layers.length; i++) {
     if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
         labelLayerId = layers[i].id;
         break;
     }
 }
    map.addSource('hex', { type: 'geojson', data: url });
    map.getSource('hex').setData(url);
    map.addLayer({
        "id": "hex-3d",
        "type": "fill-extrusion",
        "source": "hex",
        "paint":{
          'fill-extrusion-opacity': 0.75,
          "fill-extrusion-color": {
            "property": 'count',
            "stops": [
              [0, '#fff7ec'],
              [20, '#fee8c8'],
              [50, '#fdd49e'],
              [100, '#fdbb84'],
              [200, '#fc8d59'],
              [350, '#ef6548'],
              [500, '#d7301f'],
              [1000, '#990000']]},
          'fill-extrusion-height':{
            "property": 'count',
            "stops": [
              [0, 100],
              [20, 500],
              [50, 1000],
              [100, 1500],
              [200, 2000],
              [350, 2500],
              [500, 3000],
              [1000, 5000],[1500, 8000],[5000, 10000]]},
        },
        "layout": {
        }
    });
openNav();
});
map.addControl(new mapboxgl.NavigationControl());
/*
    map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
           layers: ['test']
         });

        if (!features.length) {
        return;
      }
      var feature = features[0];
      console.log(feature);
      var popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<h3>' + feature.properties.name + '</h3><p>' +
      feature.properties.addressStreet + '</p><h4><strong>' +
       feature.properties.bikesAvailable + '</strong> Bikes</h4><h4><strong>' +
       feature.properties.docksAvailable + '</strong> Docks </h4>'
)
      .setLngLat(feature.geometry.coordinates)
      .addTo(map);
    });*/
