// Module ID: 5707
// Function ID: 5708
// Name: Call
// Dependencies: [1304, 1338, 5685, 1305]

// Module 5707 (Call)
import GetIntrinsic from "GetIntrinsic" /* 1304 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import GetIntrinsic2 from "GetIntrinsic" /* 5685 */;

let tmp2;
const _mod1305 = tmp2(1305);
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
    const tmp4 = new _mod1305("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp4;
  }
};
