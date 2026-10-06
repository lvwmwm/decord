// Module ID: 5356
// Function ID: 5357
// Name: trim
// Dependencies: [1461, 5357, 5345, 5360, 5358, 5364]

// Module 5356 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5345 */;
import getPolyfill from "getPolyfill" /* 5357 */;
import trim2 from "trim" /* 5358 */;
import shimStringTrim from "shimStringTrim" /* 5364 */;
import callBind from "callBind" /* 1461 */;
import defineProperties from "defineProperties" /* 5360 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
