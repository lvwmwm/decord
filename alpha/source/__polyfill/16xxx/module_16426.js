// Module ID: 16426
// Function ID: 16427
// Dependencies: [16427, 16440, 16388, 16409]

// Module 16426
import _mod16409 from "module_16409" /* 16409 */;
import _mod16427 from "module_16427" /* 16427 */;
import defineProperty2 from "defineProperty2" /* 16440 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16427(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16409(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16409)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
