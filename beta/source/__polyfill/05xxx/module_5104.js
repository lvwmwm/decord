// Module ID: 5104
// Function ID: 5105
// Dependencies: [1462, 5105, 1327, 5109, 5124, 5107, 5170]

// Module 5104
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;
import getPolyfill from "getPolyfill" /* 5105 */;
import _mod5107 from "module_5107" /* 5107 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5109 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5170 */;
import callBind from "callBind" /* 1462 */;
import defineProperties from "defineProperties" /* 5124 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5107, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
