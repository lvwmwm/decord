// Module ID: 5652
// Function ID: 5653
// Dependencies: [1474, 5653, 1339, 5657, 5672, 5655, 5718]

// Module 5652
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import getPolyfill from "getPolyfill" /* 5653 */;
import _mod5655 from "module_5655" /* 5655 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5657 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5718 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5672 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5655, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
