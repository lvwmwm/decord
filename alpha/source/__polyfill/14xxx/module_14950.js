// Module ID: 14950
// Function ID: 14951
// Dependencies: [14951, 14964, 14912, 14933]

// Module 14950
import _mod14933 from "module_14933" /* 14933 */;
import _mod14951 from "module_14951" /* 14951 */;
import defineProperty2 from "defineProperty2" /* 14964 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod14951(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod14933(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(14933)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
