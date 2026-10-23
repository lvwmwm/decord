// Module ID: 6392
// Function ID: 6393
// Dependencies: [1476, 6393, 1341, 6397, 6412, 6395, 6458]

// Module 6392
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import getPolyfill from "getPolyfill" /* 6393 */;
import _mod6395 from "module_6395" /* 6395 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6397 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6458 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6412 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6395, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
