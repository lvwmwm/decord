// Module ID: 4790
// Function ID: 4791
// Name: trim
// Dependencies: [1418, 4791, 4779, 4794, 4792, 4798]

// Module 4790 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4779 */;
import getPolyfill from "getPolyfill" /* 4791 */;
import trim2 from "trim" /* 4792 */;
import shimStringTrim from "shimStringTrim" /* 4798 */;
import callBind from "callBind" /* 1418 */;
import defineProperty from "defineProperty" /* 4794 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return callback(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = getPolyfill;
obj[1] = trim2;
obj[2] = shimStringTrim;
defineProperty(trim, obj);

export default trim;
