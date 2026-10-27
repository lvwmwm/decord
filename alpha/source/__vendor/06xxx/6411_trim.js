// Module ID: 6411
// Function ID: 6412
// Name: trim
// Dependencies: [1473, 6412, 6400, 6415, 6413, 6419]

// Module 6411 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6400 */;
import getPolyfill from "getPolyfill" /* 6412 */;
import trim2 from "trim" /* 6413 */;
import shimStringTrim from "shimStringTrim" /* 6419 */;
import callBind from "callBind" /* 1473 */;
import defineProperties from "defineProperties" /* 6415 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
