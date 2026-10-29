// Module ID: 16083
// Function ID: 16084
// Dependencies: [16084, 16097, 16045, 16066]

// Module 16083
import _mod16066 from "module_16066" /* 16066 */;
import _mod16084 from "module_16084" /* 16084 */;
import defineProperty2 from "defineProperty2" /* 16097 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16084(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16066(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16066)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
