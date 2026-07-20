// Module ID: 4362
// Function ID: 38690
// Name: allSettled
// Dependencies: []

// Module 4362 (allSettled)
require(dependencyMap[0])();
const _module = require(dependencyMap[1]);
let closure_0 = _module(require(dependencyMap[2])());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = {};
const _module1 = require(dependencyMap[3]);
obj.getPolyfill = require(dependencyMap[2]);
obj.implementation = require(dependencyMap[4]);
obj.shim = require(dependencyMap[5]);
_module1(allSettled, obj);

export default allSettled;
