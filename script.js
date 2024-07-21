// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create custom icons
var characterIcon = L.divIcon({
  className: 'character',
  iconSize: [40, 40]
});

var coinIcon = L.divIcon({
  className: 'coin coin-animation',
  iconSize: [32, 32]
});

// Add character marker
var characterMarker = L.marker([51.505, -0.09], { icon: characterIcon }).addTo(map);

// Add coins to the map
var coins = [
  { lat: 51.51, lng: -0.1 },
  { lat: 51.52, lng: -0.12 },
  { lat: 51.53, lng: -0.08 }
];

coins.forEach(function(coin) {
  L.marker([coin.lat, coin.lng], { icon: coinIcon }).addTo(map);
});

// Update character position based on user's location
navigator.geolocation.watchPosition(function(position) {
  var userLat = position.coords.latitude;
  var userLng = position.coords.longitude;

  characterMarker.setLatLng([userLat, userLng]);
  map.setView([userLat, userLng], 15);
}, function(error) {
  console.error('Error getting location:', error);
});
