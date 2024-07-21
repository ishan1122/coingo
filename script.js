mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [73.8567, 18.5204], // Pune coordinates
  zoom: 13
});

// Create an animated character icon
var characterElement = document.createElement('div');
characterElement.className = 'character character-animation';

var characterMarker = new mapboxgl.Marker({
  element: characterElement,
  anchor: 'bottom'
}).setLngLat([73.8567, 18.5204])
  .addTo(map);

// Create animated coins
var coins = [
  { lat: 18.51, lng: 73.85 },
  { lat: 18.52, lng: 73.86 },
  { lat: 18.53, lng: 73.87 }
];

coins.forEach(function(coin) {
  var coinElement = document.createElement('div');
  coinElement.className = 'coin coin-animation'; // Add animation class if needed

  new mapboxgl.Marker({
    element: coinElement,
    anchor: 'bottom'
  }).setLngLat([coin.lng, coin.lat])
    .addTo(map);
});

// Update character position based on user's location
navigator.geolocation.watchPosition(function(position) {
  var userLat = position.coords.latitude;
  var userLng = position.coords.longitude;

  characterMarker.setLngLat([userLng, userLat]);
  map.setCenter([userLng, userLat]);
}, function(error) {
  console.error('Error getting location:', error);
});
