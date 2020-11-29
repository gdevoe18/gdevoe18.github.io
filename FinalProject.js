//making the map and tiles, also giving credit to Open Street Maps for map tiles
const map = L.map("map").setView([0,0], 1);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tile = L.tileLayer(tileUrl,{attribution});
tile.addTo(map);

//custom ISS icon for the map
const icon = L.icon({
    iconUrl: 'IssPicture.png',
    iconSize: [50, 50],
    iconAnchor: [25, 16]
    });
const marker = L.marker([0,0], {icon: icon}).addTo(map); 

//function that gets the data from the API
let first = true;
async function issLocation() {
    const response = await fetch ("https://api.wheretheiss.at/v1/satellites/25544");
    const data = await response.json();
    const {latitude, longitude, velocity} = data;
    
    //maker to show location of the ISS
    marker.setLatLng([latitude,longitude]);
    
    if (first){
        map.setView([latitude, longitude], 2)
        first = false;
    };
    //printing the latitude and longitude for the ISS
    document.getElementById('lat').textContent = latitude.toFixed(4);
    document.getElementById('long').textContent = longitude.toFixed(4);
    document.getElementById('vel').textContent = velocity.toFixed(4);
}