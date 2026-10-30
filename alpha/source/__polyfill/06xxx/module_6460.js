// Module ID: 6460
// Function ID: 6461
// Dependencies: [1469, 6461, 1327, 6465, 6480, 6463, 6526]

// Module 6460
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;
import getPolyfill from "getPolyfill" /* 6461 */;
import _mod6463 from "module_6463" /* 6463 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6465 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6526 */;
import callBind from "callBind" /* 1469 */;
import defineProperties from "defineProperties" /* 6480 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6463, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
