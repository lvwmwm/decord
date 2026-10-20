// Module ID: 15410
// Function ID: 15411
// Dependencies: [15411, 15424, 15372, 15393]

// Module 15410
import _mod15393 from "module_15393" /* 15393 */;
import _mod15411 from "module_15411" /* 15411 */;
import defineProperty2 from "defineProperty2" /* 15424 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15411(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15393(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15393)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
