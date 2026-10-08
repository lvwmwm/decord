// Module ID: 5651
// Function ID: 5652
// Dependencies: [1473, 5652, 1338, 5656, 5671, 5654, 5717]

// Module 5651
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import getPolyfill from "getPolyfill" /* 5652 */;
import _mod5654 from "module_5654" /* 5654 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5656 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5717 */;
import callBind from "callBind" /* 1473 */;
import defineProperties from "defineProperties" /* 5671 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5654, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
