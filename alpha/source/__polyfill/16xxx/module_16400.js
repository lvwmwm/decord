// Module ID: 16400
// Function ID: 16401
// Dependencies: [16401, 16414, 16362, 16383]

// Module 16400
import _mod16383 from "module_16383" /* 16383 */;
import _mod16401 from "module_16401" /* 16401 */;
import defineProperty2 from "defineProperty2" /* 16414 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16401(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16383(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16383)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
