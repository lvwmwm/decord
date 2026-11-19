// Module ID: 15491
// Function ID: 15492
// Dependencies: [15492, 15505, 15453, 15474]

// Module 15491
import _mod15474 from "module_15474" /* 15474 */;
import _mod15492 from "module_15492" /* 15492 */;
import defineProperty2 from "defineProperty2" /* 15505 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15492(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15474(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15474)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
