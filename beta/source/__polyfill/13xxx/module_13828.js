// Module ID: 13828
// Function ID: 13829
// Dependencies: [13829, 13842, 13790, 13811]

// Module 13828
import _mod13811 from "module_13811" /* 13811 */;
import _mod13829 from "module_13829" /* 13829 */;
import defineProperty2 from "defineProperty2" /* 13842 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod13829(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod13811(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(13811)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
