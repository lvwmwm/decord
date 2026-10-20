// Module ID: 6364
// Function ID: 6365
// Name: trim
// Dependencies: [1476, 6365, 6353, 6368, 6366, 6372]

// Module 6364 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6353 */;
import getPolyfill from "getPolyfill" /* 6365 */;
import trim2 from "trim" /* 6366 */;
import shimStringTrim from "shimStringTrim" /* 6372 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6368 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
