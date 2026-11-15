// Module ID: 16511
// Function ID: 16512
// Dependencies: [16512, 16525, 16473, 16494]

// Module 16511
import _mod16494 from "module_16494" /* 16494 */;
import _mod16512 from "module_16512" /* 16512 */;
import defineProperty2 from "defineProperty2" /* 16525 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16512(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16494(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16494)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
