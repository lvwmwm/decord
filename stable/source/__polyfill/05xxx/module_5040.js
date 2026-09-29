// Module ID: 5040
// Function ID: 5041
// Dependencies: [1455, 5041, 1315, 5045, 5060, 5043, 5106]

// Module 5040
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 5041 */;
import _mod5043 from "module_5043" /* 5043 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5045 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5106 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5060" /* 5060 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5043;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
