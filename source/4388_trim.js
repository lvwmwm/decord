// Module ID: 4388
// Function ID: 38748
// Name: trim
// Dependencies: [4368, 518, 4415, 4419]

// Module 4388 (trim)
import isObject from "isObject";
import isPropertyDescriptor from "isPropertyDescriptor";

let closure_2 = isObject(require("module_518")());
function trim(arg0) {
  require(dependencyMap[2])(arg0);
  return callback(arg0);
}
const obj = {};
obj.getPolyfill = require("module_518");
obj.implementation = require(dependencyMap[4]);
obj.shim = require(dependencyMap[5]);
isPropertyDescriptor(trim, obj);

export default trim;
