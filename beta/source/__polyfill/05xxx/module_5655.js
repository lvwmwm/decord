// Module ID: 5655
// Function ID: 5656
// Dependencies: [1474, 5656, 1339, 5660, 5675, 5658, 5721]

// Module 5655
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import getPolyfill from "getPolyfill" /* 5656 */;
import _mod5658 from "module_5658" /* 5658 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5660 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5721 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5675 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5658, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
