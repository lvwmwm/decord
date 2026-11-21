// Module ID: 15578
// Function ID: 15579
// Dependencies: [15579, 15592, 15540, 15561]

// Module 15578
import _mod15561 from "module_15561" /* 15561 */;
import _mod15579 from "module_15579" /* 15579 */;
import defineProperty2 from "defineProperty2" /* 15592 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15579(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15561(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15561)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
