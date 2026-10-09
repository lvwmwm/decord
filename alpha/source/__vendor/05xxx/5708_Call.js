// Module ID: 5708
// Function ID: 5709
// Name: Call
// Dependencies: [1305, 1339, 5686, 1306]

// Module 5708 (Call)
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import GetIntrinsic2 from "GetIntrinsic" /* 5686 */;

let tmp2;
const _mod1306 = tmp2(1306);
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
    const tmp4 = new _mod1306("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp4;
  }
};
