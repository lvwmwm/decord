// Module ID: 16311
// Function ID: 16312
// Dependencies: [16312, 16325, 16273, 16294]

// Module 16311
import _mod16294 from "module_16294" /* 16294 */;
import _mod16312 from "module_16312" /* 16312 */;
import defineProperty2 from "defineProperty2" /* 16325 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16312(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16294(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16294)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
