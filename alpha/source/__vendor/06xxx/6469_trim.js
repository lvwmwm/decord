// Module ID: 6469
// Function ID: 6470
// Name: trim
// Dependencies: [1474, 6470, 6458, 6473, 6471, 6477]

// Module 6469 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6458 */;
import getPolyfill from "getPolyfill" /* 6470 */;
import trim2 from "trim" /* 6471 */;
import shimStringTrim from "shimStringTrim" /* 6477 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 6473 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
