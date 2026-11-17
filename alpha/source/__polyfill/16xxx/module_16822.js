// Module ID: 16822
// Function ID: 16823
// Dependencies: [16823, 16836, 16784, 16805]

// Module 16822
import _mod16805 from "module_16805" /* 16805 */;
import _mod16823 from "module_16823" /* 16823 */;
import defineProperty2 from "defineProperty2" /* 16836 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16823(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16805(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16805)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
