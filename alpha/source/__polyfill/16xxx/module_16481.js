// Module ID: 16481
// Function ID: 16482
// Dependencies: [16482, 16495, 16443, 16464]

// Module 16481
import _mod16464 from "module_16464" /* 16464 */;
import _mod16482 from "module_16482" /* 16482 */;
import defineProperty2 from "defineProperty2" /* 16495 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16482(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16464(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16464)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
