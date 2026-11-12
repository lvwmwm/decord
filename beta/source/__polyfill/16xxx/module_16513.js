// Module ID: 16513
// Function ID: 16514
// Dependencies: [16514, 16527, 16475, 16496]

// Module 16513
import _mod16496 from "module_16496" /* 16496 */;
import _mod16514 from "module_16514" /* 16514 */;
import defineProperty2 from "defineProperty2" /* 16527 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16514(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16496(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16496)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
