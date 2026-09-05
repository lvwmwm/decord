// Module ID: 4848
// Function ID: 4849
// Name: getEvalledConstructor
// Dependencies: [1282, 1316]

// Module 4848 (getEvalledConstructor)
import getEvalledConstructor from "getEvalledConstructor" /* 1282 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;

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
