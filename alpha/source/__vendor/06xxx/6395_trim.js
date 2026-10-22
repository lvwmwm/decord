// Module ID: 6395
// Function ID: 6396
// Name: trim
// Dependencies: [1476, 6396, 6384, 6399, 6397, 6403]

// Module 6395 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6384 */;
import getPolyfill from "getPolyfill" /* 6396 */;
import trim2 from "trim" /* 6397 */;
import shimStringTrim from "shimStringTrim" /* 6403 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6399 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
