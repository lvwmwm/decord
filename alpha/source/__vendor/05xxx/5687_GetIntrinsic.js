// Module ID: 5687
// Function ID: 5688
// Name: GetIntrinsic
// Dependencies: [1305, 1339]

// Module 5687 (GetIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;

const tmp = GetIntrinsic("%Array%");
let closure_0 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");
const tmp3 = tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});
const tmp2 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");

export default tmp3;
