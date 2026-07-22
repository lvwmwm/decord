// Module ID: 4376
// Function ID: 38777
// Name: map
// Dependencies: []

// Module 4376 (map)
const _module = require(dependencyMap[0]);
let closure_2 = _module.apply(require(dependencyMap[1])());
let closure_3 = require(dependencyMap[2])("Array.prototype.slice");
function map(arg0, arg1) {
  require(dependencyMap[3])(arg0);
  return callback(arg0, callback2(arguments, 1));
}
const obj = {};
const _module1 = require(dependencyMap[4]);
obj.getPolyfill = require(dependencyMap[1]);
obj.implementation = require(dependencyMap[5]);
obj.shim = require(dependencyMap[6]);
_module1(map, obj);

export default map;
