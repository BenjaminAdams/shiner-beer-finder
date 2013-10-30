(function() {

    var noIcon = '/1px.jpg';

    var latlng = new google.maps.LatLng('29.4291304', '-97.1705425');
    myOptions = {
        zoom: 18,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        myOptions);

    var shinerMarker = new google.maps.Marker({
        position: new google.maps.LatLng('29.4291304', '-97.1705425'),
        map: map,
        icon: noIcon
    });

    // var shinerInfoWindow = new google.maps.InfoWindow({
    //     //content: '<div class="infoContainer"><h2>The Spoetzl Brewery</h2><div class="spacer"></div> <div class="addr">Address: 603 E Brewery St, Shiner, TX 77984</div><div class="distance">Distance: 102.2 Miles *Star* Directions *Star* Tour Hours</div></div>'
    //    content:  $("#infoboxTxt").html()
    // });
    // shinerInfoWindow.open(map, m16231);

    // google.maps.event.addListener(shinerInfoWindow, 'domready', function() {
    //     var parent = $('.infoContainer').parent().parent().parent()
    //     parent.addClass('infoWindowParent')
    // });

    var infobox = new InfoBox({
        // content: document.getElementById("infoboxTxt"),
        content: $("#infoboxTxt").html(),
        maxWidth: 620,
     //   pane: 'mapPane',
        //pixelOffset: new google.maps.Size(140, 0),
        zIndex: null,
        boxStyle: {
            background: "transparent url('marker.png') no-repeat top left",
            opacity: 1,
            width: "620px",
            height: "290px"
        },
        closeBoxMargin: "12px 4px 2px 2px",
        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
         infoBoxClearance: new google.maps.Size(1, 1)
    });

   infobox.open(map, shinerMarker);

    // var infowindow = new google.maps.InfoWindow({
    //     content: '<div id="gm_content">asdasdads</div>'
    // });

    // google.maps.event.addListener(infowindow, 'domready', function() {
    //     var el = document.getElementById('gm_content').parentNode.parentNode.parentNode;
    //     el.firstChild.setAttribute('class', 'closeInfoWindow');
    //     el.firstChild.setAttribute('title', 'Close Info Window');
    //     el = (el.previousElementSibling) ? el.previousElementSibling : el.previousSibling;
    //     el.firstChild.parentNode.setAttribute('class', 'infoWindowContainer');
    //     for (var i = 0; i < 11; i++) {
    //         el = (el.previousElementSibling) ? el.previousElementSibling : el.previousSibling;
    //         el.style.display = 'none';
    //     }
    // });
    // infowindow.open(map, m16231);

}());