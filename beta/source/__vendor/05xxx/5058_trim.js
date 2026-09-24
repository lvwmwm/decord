// Module ID: 5058
// Function ID: 5059
// Name: trim
// Dependencies: [1459, 5059, 5047, 5062, 5060, 5066]

// Module 5058 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5047 */;
import _mod5059 from "module_5059" /* 5059 */;
import _mod5060 from "module_5060" /* 5060 */;
import shimStringTrim from "shimStringTrim" /* 5066 */;
import callBind from "callBind" /* 1459 */;
import defineProperty from "module_5062" /* 5062 */;

let closure_2 = callBind(_mod5059());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5059;
obj.implementation = _mod5060;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
