// Module ID: 6466
// Function ID: 6467
// Dependencies: [1468, 6467, 1326, 6471, 6486, 6469, 6532]

// Module 6466
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import getPolyfill from "getPolyfill" /* 6467 */;
import _mod6469 from "module_6469" /* 6469 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6471 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6532 */;
import callBind from "callBind" /* 1468 */;
import defineProperties from "defineProperties" /* 6486 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6469, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
