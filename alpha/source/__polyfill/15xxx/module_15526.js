// Module ID: 15526
// Function ID: 15527
// Dependencies: [15527, 15540, 15488, 15509]

// Module 15526
import _mod15509 from "module_15509" /* 15509 */;
import _mod15527 from "module_15527" /* 15527 */;
import defineProperty2 from "defineProperty2" /* 15540 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15527(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15509(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15509)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
