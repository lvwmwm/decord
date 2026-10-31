// Module ID: 6482
// Function ID: 6483
// Name: trim
// Dependencies: [1468, 6483, 6471, 6486, 6484, 6490]

// Module 6482 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6471 */;
import getPolyfill from "getPolyfill" /* 6483 */;
import trim2 from "trim" /* 6484 */;
import shimStringTrim from "shimStringTrim" /* 6490 */;
import callBind from "callBind" /* 1468 */;
import defineProperties from "defineProperties" /* 6486 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
