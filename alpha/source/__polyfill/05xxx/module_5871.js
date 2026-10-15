// Module ID: 5871
// Function ID: 5872
// Dependencies: [1474, 5872, 1339, 5876, 5891, 5874, 5937]

// Module 5871
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import getPolyfill from "getPolyfill" /* 5872 */;
import _mod5874 from "module_5874" /* 5874 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5876 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5937 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5891 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5874, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
