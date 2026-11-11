// Module ID: 16669
// Function ID: 16670
// Dependencies: [16670, 16683, 16631, 16652]

// Module 16669
import _mod16652 from "module_16652" /* 16652 */;
import _mod16670 from "module_16670" /* 16670 */;
import defineProperty2 from "defineProperty2" /* 16683 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16670(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16652(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16652)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
