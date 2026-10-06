// Module ID: 13830
// Function ID: 13831
// Dependencies: [13831, 13844, 13792, 13813]

// Module 13830
import _mod13813 from "module_13813" /* 13813 */;
import _mod13831 from "module_13831" /* 13831 */;
import defineProperty2 from "defineProperty2" /* 13844 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod13831(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod13813(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(13813)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
