// Module ID: 15360
// Function ID: 15361
// Dependencies: [15361, 15374, 15322, 15343]

// Module 15360
import _mod15343 from "module_15343" /* 15343 */;
import _mod15361 from "module_15361" /* 15361 */;
import defineProperty2 from "defineProperty2" /* 15374 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15361(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15343(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15343)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
