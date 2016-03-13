var sift = require('sift');
var addressData = require('./data.json'); //with path
var arr = new Array(100);

function begin_data_collection() {
  var seconds = 10*1000 //time is in milliseconds
  setInterval(function() {
    console.log('hello there')
  }, seconds);
}

function create_data_matrix() {
  for(var x = 0; x < arr.length; x++){
      arr[x] = new Array(100);    
  }
}

create_data_matrix()
begin_data_collection()
