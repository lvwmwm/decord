// Module ID: 16423
// Function ID: 16424
// Dependencies: [16424, 16437, 16385, 16406]

// Module 16423
import _mod16406 from "module_16406" /* 16406 */;
import _mod16424 from "module_16424" /* 16424 */;
import defineProperty2 from "defineProperty2" /* 16437 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16424(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16406(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16406)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
