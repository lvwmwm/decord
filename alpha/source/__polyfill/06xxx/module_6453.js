// Module ID: 6453
// Function ID: 6454
// Dependencies: [1474, 6454, 1338, 6458, 6473, 6456, 6519]

// Module 6453
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import getPolyfill from "getPolyfill" /* 6454 */;
import _mod6456 from "module_6456" /* 6456 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6458 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6519 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 6473 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6456, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
