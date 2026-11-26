// Module ID: 15590
// Function ID: 15591
// Dependencies: [15591, 15604, 15552, 15573]

// Module 15590
import _mod15573 from "module_15573" /* 15573 */;
import _mod15591 from "module_15591" /* 15591 */;
import defineProperty2 from "defineProperty2" /* 15604 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15591(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15573(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15573)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
