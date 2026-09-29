// Module ID: 5056
// Function ID: 5057
// Name: trim
// Dependencies: [1455, 5057, 5045, 5060, 5058, 5064]

// Module 5056 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5045 */;
import _mod5057 from "module_5057" /* 5057 */;
import _mod5058 from "module_5058" /* 5058 */;
import shimStringTrim from "shimStringTrim" /* 5064 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5060" /* 5060 */;

let closure_2 = callBind(_mod5057());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5057;
obj.implementation = _mod5058;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
