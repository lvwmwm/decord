// Module ID: 6426
// Function ID: 6427
// Dependencies: [1476, 6427, 1341, 6431, 6446, 6429, 6492]

// Module 6426
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import getPolyfill from "getPolyfill" /* 6427 */;
import _mod6429 from "module_6429" /* 6429 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6431 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6492 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6446 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6429, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
