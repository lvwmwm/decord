// Module ID: 6373
// Function ID: 6374
// Dependencies: [1476, 6374, 1341, 6378, 6393, 6376, 6439]

// Module 6373
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import getPolyfill from "getPolyfill" /* 6374 */;
import _mod6376 from "module_6376" /* 6376 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6378 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6439 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6393 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6376, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
