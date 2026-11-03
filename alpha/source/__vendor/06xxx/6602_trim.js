// Module ID: 6602
// Function ID: 6603
// Name: trim
// Dependencies: [1470, 6603, 6591, 6606, 6604, 6610]

// Module 6602 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6591 */;
import getPolyfill from "getPolyfill" /* 6603 */;
import trim2 from "trim" /* 6604 */;
import shimStringTrim from "shimStringTrim" /* 6610 */;
import callBind from "callBind" /* 1470 */;
import defineProperties from "defineProperties" /* 6606 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
