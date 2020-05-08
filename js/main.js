var map = L.map('map', {
  center: [20.399069486938547, -157.1958146477091],
  zoom: 8.0,
  maxZoom: 12,
  minZoom: 4,
  detectRetina: true,
  // add fullscreen plugin
  fullscreenControl: true,
});

var baseMap = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var baselayer = L.tileLayer(baseMap, {
  maxZoom: 12,
  attribution:
    '<a href="https://www.mapbox.com/about/maps/"> © Mapbox </a> \
    <a href="http://www.openstreetmap.org/copyright"> © OpenStreetMap </a> \
    <a href="https://www.mapbox.com/map-feedback/"> Improve this map </a>',
}).addTo(map);

var mytile = L.tileLayer('tiles/{z}/{x}/{y}.jpg', {
  maxZoom: 12,
  tms: true,
  attribution: 'Generated by QTiles',
}).addTo(map);

var mini = new L.TileLayer(baseMap, {
  minZoom: 4,
  maxZoom: 12,
});

map.setView(new L.LatLng(20.3, -157), 8);

var mini = new L.TileLayer(baseMap, {
  minZoom: 0,
  maxZoom: 13,
});
var miniMap = new L.Control.MiniMap(mini, { toggleDisplay: true }).addTo(map);
