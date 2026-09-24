// Module ID: 5098
// Function ID: 5099
// Name: Call
// Dependencies: [1285, 1319, 5076, 1286]

// Module 5098 (Call)
import _mod1285 from "module_1285" /* 1285 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import _mod5076 from "module_5076" /* 5076 */;

const _mod1286 = tmp2(1286);
let tmp = _mod1285("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5076(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1286("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};
