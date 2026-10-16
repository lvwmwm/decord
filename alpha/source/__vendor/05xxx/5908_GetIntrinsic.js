// Module ID: 5908
// Function ID: 5909
// Name: GetIntrinsic
// Dependencies: [1307, 1341]

// Module 5908 (GetIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;

const tmp = GetIntrinsic("%Array%");
let closure_0 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");
const tmp3 = tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});
const tmp2 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");

export default tmp3;
