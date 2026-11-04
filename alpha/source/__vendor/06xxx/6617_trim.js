// Module ID: 6617
// Function ID: 6618
// Name: trim
// Dependencies: [1470, 6618, 6606, 6621, 6619, 6625]

// Module 6617 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6606 */;
import getPolyfill from "getPolyfill" /* 6618 */;
import trim2 from "trim" /* 6619 */;
import shimStringTrim from "shimStringTrim" /* 6625 */;
import callBind from "callBind" /* 1470 */;
import defineProperties from "defineProperties" /* 6621 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
