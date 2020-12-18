var mymap = L.map('mapid');

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmxvNjg5MjAiLCJhIjoiY2tpc21lc2diMmhrbzJ2cWppMjQyYjdvdSJ9.sbYTzEUshse7zU1kPViUoA'
}).addTo(mymap);

var myIcon = L.icon({
    iconUrl: 'https://img.icons8.com/doodle/48/000000/kebab.png',
    iconSize: [50, 50],
})
// var marker = L.marker([50.11928362660925, 8.739935625254411]).addTo(mymap);

var restaurants = {
    "My Kebab S." : {
        "adresse" : "3 rue de Gens",
        "position" : [50.11928362660925, 8.73993562]
    },
    
    "My Kebab E." : {
        "adresse" : "10 rue de la Singularité",
        "position" : [50.13603618781754, 8.6263891]
    },
    
    "My Kebab F." : {
        "adresse" : "2 rue de la Joie",
        "position" : [50.14126725466829, 8.56771229]
    },
    
    
}

var markers = []

for (restaurant in restaurants) {
    marker = new L.marker(restaurants[restaurant].position, {icon: myIcon}).addTo(mymap)
    marker.bindPopup("<strong>" + restaurant + "</strong><br>" + restaurants[restaurant].adresse)
    markers.push(marker)
}

var featureGroup = L.featureGroup(markers).addTo(mymap)

mymap.fitBounds(featureGroup.getBounds(), {padding : [50,50]})


// marker.bindPopup("<b>FKK Mainhattan</b><br>FKK Sauna Club Mainhattan | Bordell Frankfurt");

var circle = L.circle([50.1109221, 8.6821267], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

circle.bindPopup("Centre ville de Francfort");
