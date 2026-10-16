// Module ID: 5890
// Function ID: 5891
// Name: trim
// Dependencies: [1476, 5891, 5879, 5894, 5892, 5898]

// Module 5890 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5879 */;
import getPolyfill from "getPolyfill" /* 5891 */;
import trim2 from "trim" /* 5892 */;
import shimStringTrim from "shimStringTrim" /* 5898 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 5894 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
