// Module ID: 6445
// Function ID: 6446
// Name: trim
// Dependencies: [1473, 6446, 6434, 6449, 6447, 6453]

// Module 6445 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6434 */;
import getPolyfill from "getPolyfill" /* 6446 */;
import trim2 from "trim" /* 6447 */;
import shimStringTrim from "shimStringTrim" /* 6453 */;
import callBind from "callBind" /* 1473 */;
import defineProperties from "defineProperties" /* 6449 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
