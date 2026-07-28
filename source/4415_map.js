// Module ID: 4415
// Function ID: 38936
// Name: map
// Dependencies: [1379, 4416, 551, 4420, 4435, 4418, 4481]

// Module 4415 (map)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind.apply(require("getPolyfill")());
let closure_3 = require("callBoundIntrinsic")("Array.prototype.slice");
function map(arg0, arg1) {
  require(4420) /* RequireObjectCoercible */(arg0);
  return callback(arg0, callback2(arguments, 1));
}
const obj = {};
obj.getPolyfill = require("getPolyfill");
obj.implementation = require("map");
obj.shim = require("shimArrayPrototypeMap");
defineProperty(map, obj);

export default map;
