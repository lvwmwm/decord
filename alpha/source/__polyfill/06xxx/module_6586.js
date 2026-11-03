// Module ID: 6586
// Function ID: 6587
// Dependencies: [1470, 6587, 1326, 6591, 6606, 6589, 6652]

// Module 6586
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import getPolyfill from "getPolyfill" /* 6587 */;
import _mod6589 from "module_6589" /* 6589 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6591 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6652 */;
import callBind from "callBind" /* 1470 */;
import defineProperties from "defineProperties" /* 6606 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod6589, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
