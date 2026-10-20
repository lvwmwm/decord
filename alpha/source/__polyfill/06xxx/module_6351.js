// Module ID: 6351
// Function ID: 6352
// Dependencies: [1476, 6352, 1341, 6356, 6371, 6354, 6417]

// Module 6351
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import getPolyfill from "getPolyfill" /* 6352 */;
import _mod6354 from "module_6354" /* 6354 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6356 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6417 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6371 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6354, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
