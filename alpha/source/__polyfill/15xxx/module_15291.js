// Module ID: 15291
// Function ID: 15292
// Dependencies: [15292, 15305, 15253, 15274]

// Module 15291
import _mod15274 from "module_15274" /* 15274 */;
import _mod15292 from "module_15292" /* 15292 */;
import defineProperty2 from "defineProperty2" /* 15305 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15292(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15274(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15274)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
