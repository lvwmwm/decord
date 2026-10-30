// Module ID: 6476
// Function ID: 6477
// Name: trim
// Dependencies: [1469, 6477, 6465, 6480, 6478, 6484]

// Module 6476 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6465 */;
import getPolyfill from "getPolyfill" /* 6477 */;
import trim2 from "trim" /* 6478 */;
import shimStringTrim from "shimStringTrim" /* 6484 */;
import callBind from "callBind" /* 1469 */;
import defineProperties from "defineProperties" /* 6480 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
