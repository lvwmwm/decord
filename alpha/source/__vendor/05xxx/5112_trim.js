// Module ID: 5112
// Function ID: 5113
// Name: trim
// Dependencies: [1455, 5113, 5101, 5116, 5114, 5120]

// Module 5112 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5101 */;
import _mod5113 from "module_5113" /* 5113 */;
import _mod5114 from "module_5114" /* 5114 */;
import shimStringTrim from "shimStringTrim" /* 5120 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5116" /* 5116 */;

let closure_2 = callBind(_mod5113());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5113;
obj.implementation = _mod5114;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
