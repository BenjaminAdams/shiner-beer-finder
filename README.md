shiner-beer-finder
==================

#howto

Declare Beerfinder
```js
//BeerMap(container, zoomLevel, startLat, startLong)
var beerMap = new BeerMap("map-canvas",14, '29.4349004', '-97.1690')
```

Add location
```js
beerMap.addLocation( id, latitude, long,businessType)
beerMap.addLocation( 1, '29.4349004', '-97.1690', 1)
```


I assume if the user enters in a new search we want to clear all markers?
```js
beerMap.clear()
```

Set zoom or center the map
```js
beerMap.setZoom(num)
beerMap.setCenter(lat,long)
```

or do it the automatic way!
```js
beerMap.fitBounds()
```