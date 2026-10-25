// Module ID: 15585
// Function ID: 15586
// Dependencies: [15586, 15599, 15547, 15568]

// Module 15585
import _mod15568 from "module_15568" /* 15568 */;
import _mod15586 from "module_15586" /* 15586 */;
import defineProperty2 from "defineProperty2" /* 15599 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15586(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15568(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15568)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
