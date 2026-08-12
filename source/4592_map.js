// Module ID: 4592
// Function ID: 4593
// Name: map
// Dependencies: [1422, 4593, 574, 4597, 4612, 4595, 4658]

// Module 4592 (map)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind.apply(require("getPolyfill")());
let closure_3 = require("callBoundIntrinsic")("Array.prototype.slice");
function map(arg0, arg1) {
  require(4597) /* RequireObjectCoercible */(arg0);
  return callback(arg0, callback2(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = require("getPolyfill");
obj[1] = require("map");
obj[2] = require("shimArrayPrototypeMap");
defineProperty(map, obj);

export default map;
