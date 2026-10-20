// Module ID: 5671
// Function ID: 5672
// Name: trim
// Dependencies: [1474, 5672, 5660, 5675, 5673, 5679]

// Module 5671 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5660 */;
import getPolyfill from "getPolyfill" /* 5672 */;
import trim2 from "trim" /* 5673 */;
import shimStringTrim from "shimStringTrim" /* 5679 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5675 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
