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

        lastClicked = "";

        latlng = new google.maps.LatLng('46.0730555556', ' -100.546666667');
        myOptions = {
            zoom: 4,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
            myOptions);

        latlng = new google.maps.LatLng(30.25, -97.75);
        map.setCenter(latlng);
        map.setZoom(5);
        // loadLocations();

        $stringData. = "m$count=new google.maps.Marker({position: new google.maps.LatLng('$lat', '$long'),map: map,";

        if ($hotTub == 1) {
            $stringData. = "icon:h";
        } else {
            $stringData. = "icon:p";
        }

        $stringData. = "});";

        //info window
        $stringData. = "i$count=new google.maps.InfoWindow({content: '<h2><a href=\"/?p=$postid\">$name</a></h2>$addr<br /><img src=\"$mainImg\" class=\"m\"/>'});";

        $stringData. = "google.maps.event.addListener(m$count, 'click', function() {if(x != ''){x.close();}x=i$count;i$count.open(map,m$count);});";

        $count++;
    }

    $stringData. = " } ";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert('geolocation not supported');

    }

    function success(position) {
        //show the location of the user after they accept

        latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        map.setCenter(latlng);
        map.setZoom(11);

        //load the script of that state    

        //loadLocations();

    }

    function error(msg) {
        console.log('ERROR:', msg)
        // alert('error: ' + msg);

    }

}());