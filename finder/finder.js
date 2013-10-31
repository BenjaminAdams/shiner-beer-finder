(function () {



function BeerMap(zoomLevel, startLat, startLong) { 

    var storeIcon = 'storepin.png';
    var barIcon = 'barpin.png';
    var mapCenter = new google.maps.LatLng(startLat, startLong)
    var startOptions = {
        zoom: zoomLevel,
        center: mapCenter,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), startOptions);

this.init = function() {
    //add custom controls
    var zoominControl = new  this.addZoomControls();
    map.setCenter(mapCenter)
}

 this.addLocation = function(plotLat, plotLong, businessType)
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

        var shinerMarker = new google.maps.Marker({
        position: latLong,
        map: map,
        icon: barIcon
    });
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

var beerMap = new BeerMap(17, '29.4349004', '-97.1690')
beerMap.addLocation(  '29.4349004', '-97.1690', 1)

}());


