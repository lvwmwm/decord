// Module ID: 5887
// Function ID: 5888
// Name: trim
// Dependencies: [1474, 5888, 5876, 5891, 5889, 5895]

// Module 5887 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5876 */;
import getPolyfill from "getPolyfill" /* 5888 */;
import trim2 from "trim" /* 5889 */;
import shimStringTrim from "shimStringTrim" /* 5895 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5891 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
