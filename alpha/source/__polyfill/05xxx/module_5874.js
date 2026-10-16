// Module ID: 5874
// Function ID: 5875
// Dependencies: [1476, 5875, 1341, 5879, 5894, 5877, 5940]

// Module 5874
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import getPolyfill from "getPolyfill" /* 5875 */;
import _mod5877 from "module_5877" /* 5877 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5879 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5940 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 5894 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5877, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
