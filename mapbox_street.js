const mapElement = document.querySelector('.map');

const latitude = mapElement.getAttribute('data-lat');
const longitude = mapElement.getAttribute('data-lng');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FsZWJoYW4iLCJhIjoiY20zYWZhemx6MTJvMDJqcHhuOHpzMzIxaCJ9.Ex5-2rGapj9t0afOM2s4Yw';
const map = new mapboxgl.Map({
    container: mapElement,
    center: [longitude, latitude],
    zoom: 15,
    pitch: 62,
});

function changeMap(lat, lng) {
    map.setCenter([lng, lat]);
}