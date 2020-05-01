window.onload = () => {

    //displayStores();
    //setOnClickListener();
}


var map;
var markers = [];
var infoWindow;

function initMap() {
    var Bangladesh = {
        lat: 34.063380,
        lng: -118.358080
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: dhaka,
        zoom: 9,
        mapTypeId: 'roadmap',

    });
    infoWindow = new google.maps.InfoWindow();



}