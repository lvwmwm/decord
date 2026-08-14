// Module ID: 4615
// Function ID: 4616
// Name: map
// Dependencies: [1422, 4616, 574, 4620, 4635, 4618, 4681]

// Module 4615 (map)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind.apply(require("getPolyfill")());
let closure_3 = require("callBoundIntrinsic")("Array.prototype.slice");
function map(arg0, arg1) {
  require(4620) /* RequireObjectCoercible */(arg0);
  return callback(arg0, callback2(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = require("getPolyfill");
obj[1] = require("map");
obj[2] = require("shimArrayPrototypeMap");
defineProperty(map, obj);

export default map;
