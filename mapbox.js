
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FsZWJoYW4iLCJhIjoiY20zYWZhemx6MTJvMDJqcHhuOHpzMzIxaCJ9.Ex5-2rGapj9t0afOM2s4Yw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
    zoom: 1,
    center: [30, 15]
});

// korea university
new mapboxgl.Marker()
    .setLngLat([127.0325, 37.5894])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style></style>" +
        "<h1><a href='asia.html'>Korea University</a></h1>" +
        "<p>Seoul, South Korea</p>"
    ))
    .addTo(map);

// sils greece
new mapboxgl.Marker()
    .setLngLat([23.7275, 37.9838])
    .setPopup(new mapboxgl.Popup().setHTML("<h1><a href='europe.html'>click</a></h1>"))
    .addTo(map);

// u of wollongong
new mapboxgl.Marker()
    .setLngLat([150.8778, -34.4053])
    .setPopup(new mapboxgl.Popup().setHTML("<h1><a href='apac.html'>click</a></h1>"))
    .addTo(map);

// u in argentina
new mapboxgl.Marker()
    .setLngLat([-58.3657, -34.6140])
    .setPopup(new mapboxgl.Popup().setHTML("<h1><a href='americas.html'>click</a></h1>"))
    .addTo(map);

// fellowship in bejing
new mapboxgl.Marker()
    .setLngLat([116.4074, 39.9042])
    .setPopup(new mapboxgl.Popup().setHTML("<h1><a href='asia.html'>click</a></h1>"))
    .addTo(map);

// global affairs washington week
new mapboxgl.Marker()
    .setLngLat([-76.9995, 38.8860])
    .setPopup(new mapboxgl.Popup().setHTML("<h1><a href='americas.html'>click</a></h1>"))
    .addTo(map);

// peacemaking alaska
new mapboxgl.Marker()
    .setLngLat([-147.8341, 64.8556])
    .setPopup(new mapboxgl.Popup().setHTML("<h1><a href='americas.html'>click</a></h1>"))
    .addTo(map);

// burch brussels
new mapboxgl.Marker()
    .setLngLat([4.3917, 50.8214])
    .setPopup(new mapboxgl.Popup().setHTML("<h1><a href='europe.html'>click</a></h1>"))
    .addTo(map);

// hebrew university
new mapboxgl.Marker()
    .setLngLat([35.2414, 31.7946])
    .setPopup(new mapboxgl.Popup().setHTML("<h1><a href='asia.html'>click</a></h1>"))
    .addTo(map);

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

// The following values can be changed to control rotation speed:

// At low zooms, complete a revolution every two minutes.
const secondsPerRevolution = 240;
// Above zoom level 5, do not rotate.
const maxSpinZoom = 5;
// Rotate at intermediate speeds between zoom levels 3 and 5.
const slowSpinZoom = 3;

let userInteracting = false;
const spinEnabled = true;

function spinGlobe() {
    const zoom = map.getZoom();
    if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
            // Slow spinning at higher zooms
            const zoomDif =
                (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        // Smoothly animate the map over one second.
        // When this animation is complete, it calls a 'moveend' event.
        map.easeTo({ center, duration: 1000, easing: (n) => n });
    }
}

// Pause spinning on interaction
map.on('mousedown', () => {
    userInteracting = true;
});
map.on('dragstart', () => {
    userInteracting = true;
});

// When animation is complete, start spinning if there is no ongoing interaction
map.on('moveend', () => {
    spinGlobe();
});

spinGlobe();
