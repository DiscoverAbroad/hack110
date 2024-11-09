mapboxgl.accessToken = 'pk.eyJ1IjoiY2FsZWJoYW4iLCJhIjoiY20zYWZhemx6MTJvMDJqcHhuOHpzMzIxaCJ9.Ex5-2rGapj9t0afOM2s4Yw';
const map = new mapboxgl.Map({
    container: 'map',
    center: [-122.420679, 37.772537],
    zoom: 13,
    style: 'mapbox://styles/mapbox/standard',
    config: {
        basemap: {
            lightPreset: 'night'
        }
    }
});

map.on('style.load', () => {


})