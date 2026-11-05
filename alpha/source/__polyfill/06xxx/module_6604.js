// Module ID: 6604
// Function ID: 6605
// Dependencies: [1470, 6605, 1326, 6609, 6624, 6607, 6670]

// Module 6604
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import getPolyfill from "getPolyfill" /* 6605 */;
import _mod6607 from "module_6607" /* 6607 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6609 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6670 */;
import callBind from "callBind" /* 1470 */;
import defineProperties from "defineProperties" /* 6624 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6607, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
