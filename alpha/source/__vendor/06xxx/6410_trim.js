// Module ID: 6410
// Function ID: 6411
// Name: trim
// Dependencies: [1476, 6411, 6399, 6414, 6412, 6418]

// Module 6410 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6399 */;
import getPolyfill from "getPolyfill" /* 6411 */;
import trim2 from "trim" /* 6412 */;
import shimStringTrim from "shimStringTrim" /* 6418 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6414 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
