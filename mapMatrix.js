var sift = require('sift');
var GoogleMapsAPI = require('googlemaps')
var addressData = require('./data.json').addresses; //with path
var matrix = new Array(100);
var x = 0
var y = 0

var publicConfig = {
  key: 'AIzaSyDqot4K4ln4OEi9nqnqghzv2X1Gucmvq84',
  stagger_time: 1000, // for elevationPath
  encode_polylines: false,
  secure: true, // use https
};

var gmAPI = new GoogleMapsAPI(publicConfig);

function begin_data_collection() {
  var seconds = 5*1000 //time is in milliseconds
  var interval = setInterval(
    function() {
      if(y < 100) {
        if(x!=y) {
          gmAPI.directions({
            origin: addressData[x].add,
            destination: addressData[y].add
          }, callback);
          console.log(addressData[x].add)
          console.log(addressData[y].add)
          console.log('same')
        } else {
          matrix[x][y] = 0
        }
        y++
      } else {
        y = 0
        x += 1
        if(x < 100) {
          if(x!=y) {
            gmAPI.directions({
              origin: addressData[x].add,
              destination: addressData[y].add
            }, callback);
          } else {
            matrix[x][y] = 0
          }
        } else {
          clearInterval(interval)
        }
      }
    }, 
  seconds);
}

function callback(err, result) {
  if(result.status == 'OK') {
    console.log(result.routes[0].legs[0].duration.text)
    matrix[x][y] = result.routes[0].legs[0].duration.text
  } else {
    console.log('Directions request failed due to ' + result.status);
  }
}

function create_data_matrix() {
  for(var x = 0; x < matrix.length; x++){
      matrix[x] = new Array(100);    
  }
}



create_data_matrix()
begin_data_collection()
