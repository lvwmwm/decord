// Module ID: 5927
// Function ID: 5928
// Name: trim
// Dependencies: [1476, 5928, 5916, 5931, 5929, 5935]

// Module 5927 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5916 */;
import getPolyfill from "getPolyfill" /* 5928 */;
import trim2 from "trim" /* 5929 */;
import shimStringTrim from "shimStringTrim" /* 5935 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 5931 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
