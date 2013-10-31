(function() {

    var noIcon = '/1px.jpg';

    var shinerLatLong = new google.maps.LatLng('29.4349004', '-97.1690');
    var mapCenter = new google.maps.LatLng('29.4348004', '-97.0691');
    myOptions = {
        zoom: 17,
        center:mapCenter,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        myOptions);


//add custom controls
var zoominDiv = document.createElement('div')
var zoominControl = new ZoomControls(zoominDiv, map);

map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoominDiv);

    var shinerMarker = new google.maps.Marker({
        position:shinerLatLong ,
        map: map,
        icon: noIcon
    });


        //infobox docs: http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html#InfoBoxOptions
    var infobox = new InfoBox({
        content: $("#infoboxTxt").html(),
        maxWidth: 310,
        boxStyle: {
            background: "transparent url('marker.png') no-repeat top left",
            opacity: 1,
            width: "310px",
            height: "145px"
        },
        closeBoxURL: "1px.jpg",
    });

   infobox.open(map, shinerMarker);




function ZoomControls(controlDiv, map) {
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

  // Setup the click event listeners
  google.maps.event.addDomListener(zoomIn, 'click', function() {
    map.setZoom(map.getZoom()+1)
  });
  google.maps.event.addDomListener(zoomOut, 'click', function() {
    map.setZoom(map.getZoom()-1)
  });


}



}());