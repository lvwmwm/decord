// Module ID: 16168
// Function ID: 16169
// Dependencies: [16169, 16182, 16130, 16151]

// Module 16168
import _mod16151 from "module_16151" /* 16151 */;
import _mod16169 from "module_16169" /* 16169 */;
import defineProperty2 from "defineProperty2" /* 16182 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16169(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16151(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16151)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
