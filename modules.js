const names = require('./names_module');
const sayHi = require('./util_module');
const data = require('./alt_module');
require('./mind_grenade');

console.log(data);

sayHi("Lana");
sayHi(names.john);
sayHi(names.peter);