// Module ID: 5109
// Function ID: 5110
// Name: PromiseResolve
// Dependencies: [1285, 1459, 1307]

// Module 5109 (PromiseResolve)
import _mod1285 from "module_1285" /* 1285 */;
import _mod1307 from "module_1307" /* 1307 */;
import callBind from "callBind" /* 1459 */;

const tmp = _mod1285("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = callBind(tmp);
}
let closure_2 = tmp2;

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const tmp6 = new _mod1307("This environment does not support Promises.");
    throw tmp6;
  }
};
