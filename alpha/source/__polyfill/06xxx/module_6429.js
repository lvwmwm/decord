// Module ID: 6429
// Function ID: 6430
// Dependencies: [1473, 6430, 1338, 6434, 6449, 6432, 6495]

// Module 6429
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import getPolyfill from "getPolyfill" /* 6430 */;
import _mod6432 from "module_6432" /* 6432 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6434 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6495 */;
import callBind from "callBind" /* 1473 */;
import defineProperties from "defineProperties" /* 6449 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6432, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
