// Module ID: 6404
// Function ID: 6405
// Name: Call
// Dependencies: [1307, 1341, 6382, 1308]

// Module 6404 (Call)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import GetIntrinsic2 from "GetIntrinsic" /* 6382 */;

let tmp2;
const _mod1308 = tmp2(1308);
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
    const tmp4 = new _mod1308("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp4;
  }
};
