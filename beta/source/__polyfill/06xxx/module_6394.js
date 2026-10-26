// Module ID: 6394
// Function ID: 6395
// Dependencies: [1476, 6395, 1341, 6399, 6414, 6397, 6460]

// Module 6394
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import getPolyfill from "getPolyfill" /* 6395 */;
import _mod6397 from "module_6397" /* 6397 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6399 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6460 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6414 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6397, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
