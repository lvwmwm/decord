// Module ID: 6620
// Function ID: 6621
// Name: trim
// Dependencies: [1470, 6621, 6609, 6624, 6622, 6628]

// Module 6620 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6609 */;
import getPolyfill from "getPolyfill" /* 6621 */;
import trim2 from "trim" /* 6622 */;
import shimStringTrim from "shimStringTrim" /* 6628 */;
import callBind from "callBind" /* 1470 */;
import defineProperties from "defineProperties" /* 6624 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
