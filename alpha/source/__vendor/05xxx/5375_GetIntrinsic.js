// Module ID: 5375
// Function ID: 5376
// Name: GetIntrinsic
// Dependencies: [1292, 1326]

// Module 5375 (GetIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;

const tmp = GetIntrinsic("%Array%");
let closure_0 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");
const tmp3 = tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});
const tmp2 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");

export default tmp3;
