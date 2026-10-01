// Module ID: 5103
// Function ID: 5104
// Dependencies: [1456, 5104, 1315, 5108, 5123, 5106, 5169]

// Module 5103
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import getPolyfill from "getPolyfill" /* 5104 */;
import _mod5106 from "module_5106" /* 5106 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5108 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5169 */;
import callBind from "callBind" /* 1456 */;
import defineProperties from "defineProperties" /* 5123 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5106, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
