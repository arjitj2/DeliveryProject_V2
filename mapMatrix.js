var sift = require('sift');
var GoogleMapsAPI = require('googlemaps')
var addressData = require('./data.json'); //with path
var matrix = new Array(100);

var publicConfig = {
  key: 'AIzaSyCpSSHy2RLV7562BeqzPEoVt5FfFDk3AtY',
  stagger_time: 1000, // for elevationPath
  encode_polylines: false,
  secure: true, // use https
};
var gmAPI = new GoogleMapsAPI(publicConfig);
var service = new gmAPI.maps.DirectionsService

function begin_data_collection() {
  var seconds = 10*1000 //time is in milliseconds
  setInterval(function() {
    console.log('hello there')
  }, seconds);
}

function create_data_matrix() {
  for(var x = 0; x < matrix.length; x++){
      matrix[x] = new Array(100);    
  }
}



create_data_matrix()
begin_data_collection()
