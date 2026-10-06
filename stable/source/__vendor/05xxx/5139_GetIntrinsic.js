// Module ID: 5139
// Function ID: 5140
// Name: GetIntrinsic
// Dependencies: [1293, 1327]

// Module 5139 (GetIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1293 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;

const tmp = GetIntrinsic("%Array%");
let closure_0 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");
const tmp3 = tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});
const tmp2 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");

export default tmp3;
