// Module ID: 15621
// Function ID: 15622
// Dependencies: [15622, 15635, 15583, 15604]

// Module 15621
import _mod15604 from "module_15604" /* 15604 */;
import _mod15622 from "module_15622" /* 15622 */;
import defineProperty2 from "defineProperty2" /* 15635 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15622(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15604(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15604)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
