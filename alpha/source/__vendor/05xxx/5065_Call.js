// Module ID: 5065
// Function ID: 5066
// Name: Call
// Dependencies: [1281, 1315, 5043, 1282]

// Module 5065 (Call)
import _mod1281 from "module_1281" /* 1281 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import _mod5043 from "module_5043" /* 5043 */;

const _mod1282 = tmp2(1282);
let tmp = _mod1281("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5043(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1282("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};
