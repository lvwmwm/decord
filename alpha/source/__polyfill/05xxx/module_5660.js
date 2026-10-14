// Module ID: 5660
// Function ID: 5661
// Dependencies: [1474, 5661, 1339, 5665, 5680, 5663, 5726]

// Module 5660
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import getPolyfill from "getPolyfill" /* 5661 */;
import _mod5663 from "module_5663" /* 5663 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5665 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5726 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5680 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5663, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
