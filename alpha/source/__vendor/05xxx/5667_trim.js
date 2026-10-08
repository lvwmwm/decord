// Module ID: 5667
// Function ID: 5668
// Name: trim
// Dependencies: [1473, 5668, 5656, 5671, 5669, 5675]

// Module 5667 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5656 */;
import getPolyfill from "getPolyfill" /* 5668 */;
import trim2 from "trim" /* 5669 */;
import shimStringTrim from "shimStringTrim" /* 5675 */;
import callBind from "callBind" /* 1473 */;
import defineProperties from "defineProperties" /* 5671 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
