// Module ID: 6427
// Function ID: 6428
// Name: GetIntrinsic
// Dependencies: [1307, 1341]

// Module 6427 (GetIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;

const tmp = GetIntrinsic("%Array%");
let closure_0 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");
const tmp3 = tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});
const tmp2 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");

export default tmp3;
