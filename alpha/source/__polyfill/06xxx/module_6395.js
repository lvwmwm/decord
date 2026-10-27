// Module ID: 6395
// Function ID: 6396
// Dependencies: [1473, 6396, 1338, 6400, 6415, 6398, 6461]

// Module 6395
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import getPolyfill from "getPolyfill" /* 6396 */;
import _mod6398 from "module_6398" /* 6398 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6400 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6461 */;
import callBind from "callBind" /* 1473 */;
import defineProperties from "defineProperties" /* 6415 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6398, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
