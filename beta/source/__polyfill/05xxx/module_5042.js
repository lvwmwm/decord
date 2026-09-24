// Module ID: 5042
// Function ID: 5043
// Dependencies: [1459, 5043, 1319, 5047, 5062, 5045, 5108]

// Module 5042
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import properlyBoxed from "properlyBoxed" /* 5043 */;
import _mod5045 from "module_5045" /* 5045 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5047 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5108 */;
import callBind from "callBind" /* 1459 */;
import defineProperty from "module_5062" /* 5062 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5045;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
