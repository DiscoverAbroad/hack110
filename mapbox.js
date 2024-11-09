mapboxgl.accessToken = 'pk.eyJ1IjoiY2FsZWJoYW4iLCJhIjoiY20zYWZhemx6MTJvMDJqcHhuOHpzMzIxaCJ9.Ex5-2rGapj9t0afOM2s4Yw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    projection: 'globe',
    zoom: 1,
    center: [30, 15]
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

const marker = new mapboxgl.Marker()
    .setLngLat([30.5, 50.5])
    .setPopup(new mapboxgl.Popup().setHTML("<h1><a href='asia.html'>click</a></h1>"))
    .addTo(map);

map.on('style.load', () => {
    map.setFog({});
});


const secondsPerRevolution = 240;
const maxSpinZoom = 5;
const slowSpinZoom = 3;

let userInteracting = false;
const spinEnabled = true;

function spinGlobe() {
    const zoom = map.getZoom();
    if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
            const zoomDif =
                (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        map.easeTo({ center, duration: 1000, easing: (n) => n });
    }
}

map.on('mousedown', () => {
    userInteracting = true;
});
map.on('dragstart', () => {
    userInteracting = true;
});

map.on('moveend', () => {
    spinGlobe();
});

spinGlobe();