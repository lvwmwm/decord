// Module ID: 6442
// Function ID: 6443
// Name: trim
// Dependencies: [1476, 6443, 6431, 6446, 6444, 6450]

// Module 6442 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6431 */;
import getPolyfill from "getPolyfill" /* 6443 */;
import trim2 from "trim" /* 6444 */;
import shimStringTrim from "shimStringTrim" /* 6450 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6446 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
