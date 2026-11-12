// Module ID: 16664
// Function ID: 16665
// Dependencies: [16665, 16678, 16626, 16647]

// Module 16664
import _mod16647 from "module_16647" /* 16647 */;
import _mod16665 from "module_16665" /* 16665 */;
import defineProperty2 from "defineProperty2" /* 16678 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16665(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16647(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16647)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
