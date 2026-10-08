// Module ID: 5686
// Function ID: 5687
// Name: GetIntrinsic
// Dependencies: [1304, 1338]

// Module 5686 (GetIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1304 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;

const tmp = GetIntrinsic("%Array%");
let closure_0 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");
const tmp3 = tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});
const tmp2 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");

export default tmp3;
