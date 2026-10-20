// Module ID: 6348
// Function ID: 6349
// Dependencies: [1476, 6349, 1341, 6353, 6368, 6351, 6414]

// Module 6348
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import getPolyfill from "getPolyfill" /* 6349 */;
import _mod6351 from "module_6351" /* 6351 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6353 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6414 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6368 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6351, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
