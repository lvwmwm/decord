// Module ID: 16413
// Function ID: 16414
// Dependencies: [16414, 16427, 16375, 16396]

// Module 16413
import _mod16396 from "module_16396" /* 16396 */;
import _mod16414 from "module_16414" /* 16414 */;
import defineProperty2 from "defineProperty2" /* 16427 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16414(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16396(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16396)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
