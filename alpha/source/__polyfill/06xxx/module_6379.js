// Module ID: 6379
// Function ID: 6380
// Dependencies: [1476, 6380, 1341, 6384, 6399, 6382, 6445]

// Module 6379
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import getPolyfill from "getPolyfill" /* 6380 */;
import _mod6382 from "module_6382" /* 6382 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6384 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6445 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6399 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6382, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
