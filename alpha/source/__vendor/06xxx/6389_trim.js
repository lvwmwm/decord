// Module ID: 6389
// Function ID: 6390
// Name: trim
// Dependencies: [1476, 6390, 6378, 6393, 6391, 6397]

// Module 6389 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6378 */;
import getPolyfill from "getPolyfill" /* 6390 */;
import trim2 from "trim" /* 6391 */;
import shimStringTrim from "shimStringTrim" /* 6397 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6393 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
