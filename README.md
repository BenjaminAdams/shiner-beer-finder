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

demo
```js
var beerMap = new BeerMap("map-canvas", 14, '29.4349004', '-97.1690')
beerMap.addLocation(1, '29.4379004', '-97.1690', 1)
beerMap.addLocation(5, '29.4349004', '-97.1590', 1)
beerMap.addLocation(72, '29.4339004', '-97.1690', 1)
beerMap.addLocation(7, '29.4349004', '-97.1490', 2)
beerMap.addLocation(56, '29.4349004', '-97.1390', 2)
beerMap.addLocation(333, '29.4349004', '-97.1290', 2)

beerMap.addLocation(333, '29.7349004', '-97.1290', 2)

beerMap.fitBounds()

setTimeout(function(){
beerMap.clear()
beerMap.addLocation( 72, '29.4339004', '-97.1690', 1)
beerMap.addLocation( 7,'29.4349004', '-97.1490', 2)
 },5000)
```
