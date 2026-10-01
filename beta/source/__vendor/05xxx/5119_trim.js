// Module ID: 5119
// Function ID: 5120
// Name: trim
// Dependencies: [1456, 5120, 5108, 5123, 5121, 5127]

// Module 5119 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5108 */;
import getPolyfill from "getPolyfill" /* 5120 */;
import trim2 from "trim" /* 5121 */;
import shimStringTrim from "shimStringTrim" /* 5127 */;
import callBind from "callBind" /* 1456 */;
import defineProperties from "defineProperties" /* 5123 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
