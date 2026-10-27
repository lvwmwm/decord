// Module ID: 5911
// Function ID: 5912
// Dependencies: [1476, 5912, 1341, 5916, 5931, 5914, 5977]

// Module 5911
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import getPolyfill from "getPolyfill" /* 5912 */;
import _mod5914 from "module_5914" /* 5914 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5916 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5977 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 5931 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5914, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
