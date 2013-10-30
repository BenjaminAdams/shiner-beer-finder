(function() {

    var noIcon = '/1px.jpg';

    var shinerLatLong = new google.maps.LatLng('29.4348004', '-97.1691');
    var mapCenter = new google.maps.LatLng('29.4348004', '-97.0691');
    myOptions = {
        zoom: 18,
        center:mapCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        myOptions);

    var shinerMarker = new google.maps.Marker({
        position:shinerLatLong ,
        map: map,
        icon: noIcon
    });


        //infobox docs: http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html#InfoBoxOptions
    var infobox = new InfoBox({
        // content: document.getElementById("infoboxTxt"),
        content: $("#infoboxTxt").html(),
        maxWidth: 620,
        boxStyle: {
            background: "transparent url('marker.png') no-repeat top left",
            opacity: 1,
            width: "620px",
            height: "290px"
        },
       // closeBoxMargin: "12px 4px 2px 2px",
        closeBoxURL: "1px.jpg",
      //   infoBoxClearance: new google.maps.Size(1, 1)
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