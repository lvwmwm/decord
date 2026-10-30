// Module ID: 6516
// Function ID: 6517
// Name: Call
// Dependencies: [1293, 1327, 6494, 1294]

// Module 6516 (Call)
import GetIntrinsic from "GetIntrinsic" /* 1293 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;
import GetIntrinsic2 from "GetIntrinsic" /* 6494 */;

let tmp2;
const _mod1294 = tmp2(1294);
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
    const tmp4 = new _mod1294("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp4;
  }
};
