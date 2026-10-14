// Module ID: 5676
// Function ID: 5677
// Name: trim
// Dependencies: [1474, 5677, 5665, 5680, 5678, 5684]

// Module 5676 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5665 */;
import getPolyfill from "getPolyfill" /* 5677 */;
import trim2 from "trim" /* 5678 */;
import shimStringTrim from "shimStringTrim" /* 5684 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5680 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
