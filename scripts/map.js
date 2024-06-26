function initializeMap(mapId) {
    var mapOptions = {
        center: [10.77527241955946, 106.70624332141016],
        zoom: 10
     }
     
     // Creating a map object
     var map = new L.map('map', mapOptions);
     
     // Creating a Layer object
     var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
     
     // Adding layer to the map
     map.addLayer(layer);
}