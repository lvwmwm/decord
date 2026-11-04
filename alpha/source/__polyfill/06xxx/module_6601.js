// Module ID: 6601
// Function ID: 6602
// Dependencies: [1470, 6602, 1326, 6606, 6621, 6604, 6667]

// Module 6601
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import getPolyfill from "getPolyfill" /* 6602 */;
import _mod6604 from "module_6604" /* 6604 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6606 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6667 */;
import callBind from "callBind" /* 1470 */;
import defineProperties from "defineProperties" /* 6621 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6604, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
