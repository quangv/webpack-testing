var cats = require('./cats.js');
import cats2 from './cats.js';

console.log(cats);
console.log(cats2);

var dogs = require('./dogs.js');
import dogs2 from './dogs.js';

console.log(dogs);
console.log(dogs2);

define(function(require){
  var dogs = require('./dogs.js');
  console.log(dogs);
});
