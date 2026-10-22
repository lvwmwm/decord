// Module ID: 6396
// Function ID: 6397
// Name: trim
// Dependencies: [1476, 6397, 6385, 6400, 6398, 6404]

// Module 6396 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6385 */;
import getPolyfill from "getPolyfill" /* 6397 */;
import trim2 from "trim" /* 6398 */;
import shimStringTrim from "shimStringTrim" /* 6404 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6400 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
