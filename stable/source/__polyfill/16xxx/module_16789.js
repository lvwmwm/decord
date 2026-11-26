// Module ID: 16789
// Function ID: 16790
// Dependencies: [16790, 16803, 16751, 16772]

// Module 16789
import _mod16772 from "module_16772" /* 16772 */;
import _mod16790 from "module_16790" /* 16790 */;
import defineProperty2 from "defineProperty2" /* 16803 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16790(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16772(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16772)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
