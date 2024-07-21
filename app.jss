// Initialize the map and user location
function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var userLat = position.coords.latitude;
        var userLng = position.coords.longitude;

        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: userLat, lng: userLng },
            zoom: 15
        });

        var userMarker = new google.maps.Marker({
            position: { lat: userLat, lng: userLng },
            map: map,
            title: 'You are here'
        });

        // Add your coin markers here
        var coinLocation = { lat: userLat + 0.01, lng: userLng + 0.01 };
        var coinMarker = new google.maps.Marker({
            position: coinLocation,
            map: map,
            title: 'Coin'
        });

        // Check if the user is close enough to collect the coin
        google.maps.event.addListener(map, 'click', function(event) {
            var distance = google.maps.geometry.spherical.computeDistanceBetween(
                new google.maps.LatLng(userLat, userLng),
                event.latLng
            );

            if (distance < 100) { // e.g., 100 meters
                alert('Coin collected!');
            }
        });
    });
}

window.onload = initMap;
