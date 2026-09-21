// Module ID: 5026
// Function ID: 5027
// Name: trim
// Dependencies: [1459, 5027, 5015, 5030, 5028, 5034]

// Module 5026 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5015 */;
import _mod5027 from "module_5027" /* 5027 */;
import _mod5028 from "module_5028" /* 5028 */;
import shimStringTrim from "shimStringTrim" /* 5034 */;
import callBind from "callBind" /* 1459 */;
import defineProperty from "module_5030" /* 5030 */;

let closure_2 = callBind(_mod5027());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5027;
obj.implementation = _mod5028;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
