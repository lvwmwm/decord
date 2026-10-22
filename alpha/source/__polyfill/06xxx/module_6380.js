// Module ID: 6380
// Function ID: 6381
// Dependencies: [1476, 6381, 1341, 6385, 6400, 6383, 6446]

// Module 6380
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import getPolyfill from "getPolyfill" /* 6381 */;
import _mod6383 from "module_6383" /* 6383 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6385 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6446 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6400 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6383, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
