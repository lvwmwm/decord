// Module ID: 16471
// Function ID: 16472
// Dependencies: [16472, 16485, 16433, 16454]

// Module 16471
import _mod16454 from "module_16454" /* 16454 */;
import _mod16472 from "module_16472" /* 16472 */;
import defineProperty2 from "defineProperty2" /* 16485 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16472(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16454(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16454)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
