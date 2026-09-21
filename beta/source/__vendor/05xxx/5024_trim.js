// Module ID: 5024
// Function ID: 5025
// Name: trim
// Dependencies: [1455, 5025, 5013, 5028, 5026, 5032]

// Module 5024 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5013 */;
import _mod5025 from "module_5025" /* 5025 */;
import _mod5026 from "module_5026" /* 5026 */;
import shimStringTrim from "shimStringTrim" /* 5032 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5028" /* 5028 */;

let closure_2 = callBind(_mod5025());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5025;
obj.implementation = _mod5026;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
