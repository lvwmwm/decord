// Module ID: 5668
// Function ID: 5669
// Name: trim
// Dependencies: [1474, 5669, 5657, 5672, 5670, 5676]

// Module 5668 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5657 */;
import getPolyfill from "getPolyfill" /* 5669 */;
import trim2 from "trim" /* 5670 */;
import shimStringTrim from "shimStringTrim" /* 5676 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5672 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
