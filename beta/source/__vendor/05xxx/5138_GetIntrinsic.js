// Module ID: 5138
// Function ID: 5139
// Name: GetIntrinsic
// Dependencies: [1281, 1315]

// Module 5138 (GetIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1281 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;

const tmp = GetIntrinsic("%Array%");
let closure_0 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");
const tmp3 = tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});
const tmp2 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");

export default tmp3;
