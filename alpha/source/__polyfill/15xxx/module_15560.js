// Module ID: 15560
// Function ID: 15561
// Dependencies: [15561, 15574, 15522, 15543]

// Module 15560
import _mod15543 from "module_15543" /* 15543 */;
import _mod15561 from "module_15561" /* 15561 */;
import defineProperty2 from "defineProperty2" /* 15574 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15561(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15543(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15543)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
