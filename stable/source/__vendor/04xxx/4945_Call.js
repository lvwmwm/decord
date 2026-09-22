// Module ID: 4945
// Function ID: 4946
// Name: Call
// Dependencies: [1280, 1314, 4923, 1281]

// Module 4945 (Call)
import _mod1280 from "module_1280" /* 1280 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1314 */;
import _mod4923 from "module_4923" /* 4923 */;

const _mod1281 = tmp2(1281);
let tmp = _mod1280("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod4923(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1281("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};
