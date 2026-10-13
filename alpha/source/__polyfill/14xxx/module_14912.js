// Module ID: 14912
// Function ID: 14913
// Dependencies: [14913, 14926, 14874, 14895]

// Module 14912
import _mod14895 from "module_14895" /* 14895 */;
import _mod14913 from "module_14913" /* 14913 */;
import defineProperty2 from "defineProperty2" /* 14926 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod14913(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod14895(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(14895)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
