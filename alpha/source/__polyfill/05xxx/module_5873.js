// Module ID: 5873
// Function ID: 5874
// Dependencies: [1476, 5874, 1341, 5878, 5893, 5876, 5939]

// Module 5873
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import getPolyfill from "getPolyfill" /* 5874 */;
import _mod5876 from "module_5876" /* 5876 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5878 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5939 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 5893 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5876, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
