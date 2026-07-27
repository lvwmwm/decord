// Module ID: 4381
// Function ID: 38822
// Name: map
// Dependencies: [1379, 4382, 551, 4386, 4401, 4384, 4447]

// Module 4381 (map)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind.apply(require("getPolyfill")());
let closure_3 = require("callBoundIntrinsic")("Array.prototype.slice");
function map(arg0, arg1) {
  require(4386) /* RequireObjectCoercible */(arg0);
  return callback(arg0, callback2(arguments, 1));
}
const obj = {};
obj.getPolyfill = require("getPolyfill");
obj.implementation = require("map");
obj.shim = require("shimArrayPrototypeMap");
defineProperty(map, obj);

export default map;
