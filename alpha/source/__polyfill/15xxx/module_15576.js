// Module ID: 15576
// Function ID: 15577
// Dependencies: [15577, 15590, 15538, 15559]

// Module 15576
import _mod15559 from "module_15559" /* 15559 */;
import _mod15577 from "module_15577" /* 15577 */;
import defineProperty2 from "defineProperty2" /* 15590 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15577(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15559(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15559)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
