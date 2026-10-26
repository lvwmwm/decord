// Module ID: 15584
// Function ID: 15585
// Dependencies: [15585, 15598, 15546, 15567]

// Module 15584
import _mod15567 from "module_15567" /* 15567 */;
import _mod15585 from "module_15585" /* 15585 */;
import defineProperty2 from "defineProperty2" /* 15598 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15585(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15567(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15567)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
