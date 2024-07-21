// Initialize the map
const map = L.map('map').setView([18.5204, 73.8567], 12); // Center on Pune

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a character as a marker with an animation
const characterIcon = L.divIcon({
    className: 'character-icon',
    html: `<div class="character"></div>`,
    iconSize: [30, 30]
});

const characterMarker = L.marker([18.5204, 73.8567], { icon: characterIcon }).addTo(map);

// Move character every 2 seconds to simulate walking (for demonstration purposes)
function moveCharacter() {
    let lat = 18.5204;
    let lng = 73.8567;
    setInterval(() => {
        lat += (Math.random() - 0.5) * 0.001; // Random small movement
        lng += (Math.random() - 0.5) * 0.001;
        characterMarker.setLatLng([lat, lng]);
        map.setView([lat, lng]);
    }, 2000);
}

moveCharacter();

