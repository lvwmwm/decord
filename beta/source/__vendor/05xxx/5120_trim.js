// Module ID: 5120
// Function ID: 5121
// Name: trim
// Dependencies: [1462, 5121, 5109, 5124, 5122, 5128]

// Module 5120 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5109 */;
import getPolyfill from "getPolyfill" /* 5121 */;
import trim2 from "trim" /* 5122 */;
import shimStringTrim from "shimStringTrim" /* 5128 */;
import callBind from "callBind" /* 1462 */;
import defineProperties from "defineProperties" /* 5124 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
