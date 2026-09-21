// Module ID: 5010
// Function ID: 5011
// Dependencies: [1459, 5011, 1319, 5015, 5030, 5013, 5076]

// Module 5010
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import properlyBoxed from "properlyBoxed" /* 5011 */;
import _mod5013 from "module_5013" /* 5013 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5015 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5076 */;
import callBind from "callBind" /* 1459 */;
import defineProperty from "module_5030" /* 5030 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5013;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
