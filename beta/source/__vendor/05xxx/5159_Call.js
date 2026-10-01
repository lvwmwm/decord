// Module ID: 5159
// Function ID: 5160
// Name: Call
// Dependencies: [1281, 1315, 5137, 1282]

// Module 5159 (Call)
import GetIntrinsic from "GetIntrinsic" /* 1281 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import GetIntrinsic2 from "GetIntrinsic" /* 5137 */;

let tmp2;
const _mod1282 = tmp2(1282);
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
    const tmp4 = new _mod1282("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp4;
  }
};
