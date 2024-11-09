mapboxgl.accessToken = 'pk.eyJ1IjoiY2FsZWJoYW4iLCJhIjoiY20zYWZhemx6MTJvMDJqcHhuOHpzMzIxaCJ9.Ex5-2rGapj9t0afOM2s4Yw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    projection: 'globe',
    zoom: 1,
    center: [30, 15]
});

// korea university
new mapboxgl.Marker()
    .setLngLat([127.0325, 37.5894])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='asia.html#korea'>Korea University</a></h1>"
    ))
    .addTo(map);

// sils greece
new mapboxgl.Marker()
    .setLngLat([23.7275, 37.9838])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='europe.html#greece'>SILS in Greece</a></h1>"
    ))
    .addTo(map);

// u of wollongong
new mapboxgl.Marker()
    .setLngLat([150.8778, -34.4053])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='apac.html#wollongong'>University of Wollongong</a></h1>"
    ))
    .addTo(map);

// u in argentina
new mapboxgl.Marker()
    .setLngLat([-58.3657, -34.6140])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='americas.html#argentina'>Pontificia Universidad Catolica de Argentina</a></h1>"
    ))
    .addTo(map);

// fellowship in beijing
new mapboxgl.Marker()
    .setLngLat([116.4074, 39.9042])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='asia.html#william'>CET Beijing</a></h1>"
    ))
    .addTo(map);

// global affairs washington week
new mapboxgl.Marker()
    .setLngLat([-76.9995, 38.8860])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='americas.html#washington'>Global Affairs: Washington Week</a></h1>"
    ))
    .addTo(map);

// peacemaking alaska
new mapboxgl.Marker()
    .setLngLat([-147.8341, 64.8556])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='americas.html#alaska'>Korea University</a></h1>"
    ))
    .addTo(map);

// burch brussels
new mapboxgl.Marker()
    .setLngLat([4.3917, 50.8214])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='europe.html#brussels'>Burch in Brussels</a></h1>"
    ))
    .addTo(map);

// hebrew university
new mapboxgl.Marker()
    .setLngLat([35.2414, 31.7946])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='asia.html#hebrew'>Hebrew University</a></h1>"
    ))
    .addTo(map);

// canterbury
new mapboxgl.Marker()
    .setLngLat([172.5794, -43.5225])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='asia.html#hebrew'>University of Canterbury</a></h1>"
    ))
    .addTo(map);

// murdoch
new mapboxgl.Marker()
    .setLngLat([115.835, -32.066])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='asia.html#hebrew'>Murdoch University</a></h1>"
    ))
    .addTo(map);

// spain
new mapboxgl.Marker()
    .setLngLat([-3.8340, 40.4398])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<style>a { color: #45b0d1 }</style>" +
        "<h1><a href='asia.html#hebrew'>Universidad Francisco de Vitoria</a></h1>"
    ))
    .addTo(map);

map.addControl(new mapboxgl.NavigationControl());

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
