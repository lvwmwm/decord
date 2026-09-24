// Module ID: 5077
// Function ID: 5078
// Dependencies: [1285, 1319]

// Module 5077
import _mod1285 from "module_1285" /* 1285 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;

const tmp = _mod1285("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = callBoundIntrinsic("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});
