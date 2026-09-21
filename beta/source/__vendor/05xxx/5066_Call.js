// Module ID: 5066
// Function ID: 5067
// Name: Call
// Dependencies: [1285, 1319, 5044, 1286]

// Module 5066 (Call)
import _mod1285 from "module_1285" /* 1285 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import _mod5044 from "module_5044" /* 5044 */;

const _mod1286 = tmp2(1286);
let tmp = _mod1285("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5044(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1286("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};
