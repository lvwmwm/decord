// Module ID: 6408
// Function ID: 6409
// Name: trim
// Dependencies: [1476, 6409, 6397, 6412, 6410, 6416]

// Module 6408 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6397 */;
import getPolyfill from "getPolyfill" /* 6409 */;
import trim2 from "trim" /* 6410 */;
import shimStringTrim from "shimStringTrim" /* 6416 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6412 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
