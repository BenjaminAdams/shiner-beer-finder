(function() {

    // function initialize() {
    //     var mapOptions = {
    //         center: new google.maps.LatLng(-34.397, 150.644),
    //         zoom: 8,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     };
    //     var map = new google.maps.Map(document.getElementById("map-canvas"),
    //         mapOptions);
    // }
    // google.maps.event.addDomListener(window, 'load', initialize);

    var lastClicked = "";
    var h = '/1px.jpg';

    var latlng = new google.maps.LatLng('29.4291304', '-97.1705425');
    myOptions = {
        zoom: 18,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        myOptions);

    var m16231 = new google.maps.Marker({
        position: new google.maps.LatLng('29.4291304', '-97.1705425'),
        map: map
        // icon: h
    });

    var shinerInfoWindow = new google.maps.InfoWindow({
        content: '<div class="infoContainer"><h2>The Spoetzl Brewery</h2><div class="spacer"></div> <div class="addr">Address: 603 E Brewery St, Shiner, TX 77984</div><div class="distance">Distance: 102.2 Miles *Star* Directions *Star* Tour Hours</div></div>'
    });
    shinerInfoWindow.open(map, m16231);

    google.maps.event.addListener(shinerInfoWindow, 'domready', function() {
        var parent = $('.infoContainer').parent().parent().parent()
        parent.addClass('infoWindowParent')
    });

    // var infobox = new InfoBox({
    //     // content: document.getElementById("infoboxTxt"),
    //     content: "asdasdasdasd",
    //     disableAutoPan: false,
    //     maxWidth: 150,
    //     //pixelOffset: new google.maps.Size(140, 0),
    //     zIndex: null,
    //     boxStyle: {
    //         background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
    //         opacity: 0.75,
    //         width: "280px"
    //     },
    //     closeBoxMargin: "12px 4px 2px 2px",
    //     closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
    //     // infoBoxClearance: new google.maps.Size(1, 1)
    // });
    // infobox.open(map, m16231);

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