(function () {

 

function BeerMap(container, zoomLevel, startLat, startLong) { 

    var markerList = []
    var storeIcon = 'storepin.png';
    var barIcon = 'barpin.png';
    var activeIcon ='barpin.png';
    var mapCenter = new google.maps.LatLng(startLat, startLong)
    var startOptions = {
        zoom: zoomLevel,
        center: mapCenter,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById(container), startOptions);

this.init = function() {
    //add custom controls
    this.addZoomControls();
    this.changeCenter(mapCenter)
}

 this.addLocation = function(locationID, plotLat, plotLong, businessType)
{
var latLong = new google.maps.LatLng(plotLat, plotLong)
var icon;
switch(businessType)
{
case 1:
  icon =barIcon;
  break;
case 2:
  icon = storeIcon;
  break;
default:
    icon = barIcon;
}

        var locationMarker = new google.maps.Marker({
        position: latLong,
        map: map,
        icon: icon,
        locationID: locationID
    });

        markerList.push(locationMarker)

        google.maps.event.addDomListener(locationMarker, 'click', function () {
            //alert("id=", locationID)
            $('#theIdBox').html("You clicked ID: " +locationID)
            locationMarker.setIcon(activeIcon)
        });

}

this.clear = function(){

for(var i=0; i < markerList.length;i++)
{
    markerList[i].setMap(null)
}
    markerList = []
}

this.changeZoom = function(num){
    map.setZoom(num)
}

this.changeCenter = function(num){
    map.setCenter(num)
}

  this.addZoomControls =function(controlDiv) {

         var controlDiv = document.createElement('div')
        // Set CSS for the control border
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = 'white';
        controlUI.style.padding = '3px 4px 1px 3px';
        controlUI.style.width = '23px';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginRight = '20px';
        controlUI.style.marginBottom = '20px';
        controlUI.style.textAlign = 'center';
        var zoomIn = document.createElement('div');
        zoomIn.innerHTML = '<img src="zoom-in.png" />';
        var zoomOut = document.createElement('div');
        zoomOut.innerHTML = '<img src="zoom-out.png" />';
        controlUI.appendChild(zoomIn)
        controlUI.appendChild(zoomOut)
        controlDiv.appendChild(controlUI);
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
        // Setup the click event listeners
        google.maps.event.addDomListener(zoomIn, 'click', function () {
            map.setZoom(map.getZoom() + 1)
        });
        google.maps.event.addDomListener(zoomOut, 'click', function () {
            map.setZoom(map.getZoom() - 1)
        });


    }
    this.init()
}

var beerMap = new BeerMap("map-canvas",14, '29.4349004', '-97.1690')
beerMap.addLocation( 1, '29.4349004', '-97.1690', 1)
beerMap.addLocation( 5, '29.4349004', '-97.1590', 1)
beerMap.addLocation( 72, '29.4339004', '-97.1690', 1)
beerMap.addLocation( 7,'29.4349004', '-97.1490', 2)
beerMap.addLocation( 56, '29.4349004', '-97.1390', 2)
beerMap.addLocation( 333,'29.4349004', '-97.1290', 2)

setTimeout(function(){
 beerMap.clear()
beerMap.addLocation( 72, '29.4339004', '-97.1690', 1)
beerMap.addLocation( 7,'29.4349004', '-97.1490', 2)
    },5000)

}());


