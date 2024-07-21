const map = L.map('map').setView([18.5204, 73.8567], 12); // Pune, India

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add current location marker
const currentLocationMarker = L.marker([18.5204, 73.8567]).addTo(map);
currentLocationMarker.bindPopup('You are here!').openPopup();

// Update current location marker position on map move
map.on('move', () => {
    const currentLocation = map.getCenter();
    currentLocationMarker.setLatLng(currentLocation);
});

// Add other markers (replace with your game logic)
const markerLocations = [
    [18.5214, 73.8577],
    [18.5224, 73.8587],
    [18.5234, 73.8597],
    //...
];
for (let i = 0; i < markerLocations.length; i++) {
    L.marker(markerLocations[i]).addTo(map)
       .bindPopup(`Location ${i + 1}`).openPopup();
}

