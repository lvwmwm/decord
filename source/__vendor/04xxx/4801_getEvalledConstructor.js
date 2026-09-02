// Module ID: 4801
// Function ID: 4802
// Name: getEvalledConstructor
// Dependencies: [537, 571]

// Module 4801 (getEvalledConstructor)
import getEvalledConstructor from "getEvalledConstructor" /* 537 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 571 */;

const tmp = getEvalledConstructor("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = callBoundIntrinsic("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === callback(arg0);
});
