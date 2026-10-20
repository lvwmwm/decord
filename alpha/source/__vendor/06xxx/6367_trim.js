// Module ID: 6367
// Function ID: 6368
// Name: trim
// Dependencies: [1476, 6368, 6356, 6371, 6369, 6375]

// Module 6367 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6356 */;
import getPolyfill from "getPolyfill" /* 6368 */;
import trim2 from "trim" /* 6369 */;
import shimStringTrim from "shimStringTrim" /* 6375 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6371 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
