// Module ID: 6522
// Function ID: 6523
// Name: Call
// Dependencies: [1292, 1326, 6500, 1293]

// Module 6522 (Call)
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import GetIntrinsic2 from "GetIntrinsic" /* 6500 */;

let tmp2;
const _mod1293 = tmp2(1293);
let tmp = GetIntrinsic("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (GetIntrinsic2(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const self = this;
    const self2 = this;
    const tmp4 = new _mod1293("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp4;
  }
};
