// Module ID: 4380
// Function ID: 38809
// Name: map
// Dependencies: [1379, 4381, 551, 4385, 4400, 4383, 4446]

// Module 4380 (map)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind.apply(require("getPolyfill")());
let closure_3 = require("callBoundIntrinsic")("Array.prototype.slice");
function map(arg0, arg1) {
  require(4385) /* RequireObjectCoercible */(arg0);
  return callback(arg0, callback2(arguments, 1));
}
const obj = {};
obj.getPolyfill = require("getPolyfill");
obj.implementation = require("map");
obj.shim = require("shimArrayPrototypeMap");
defineProperty(map, obj);

export default map;
