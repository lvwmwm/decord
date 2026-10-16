// Module ID: 5889
// Function ID: 5890
// Name: trim
// Dependencies: [1476, 5890, 5878, 5893, 5891, 5897]

// Module 5889 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5878 */;
import getPolyfill from "getPolyfill" /* 5890 */;
import trim2 from "trim" /* 5891 */;
import shimStringTrim from "shimStringTrim" /* 5897 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 5893 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
