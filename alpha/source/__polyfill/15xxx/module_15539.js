// Module ID: 15539
// Function ID: 15540
// Dependencies: [15540, 15553, 15501, 15522]

// Module 15539
import _mod15522 from "module_15522" /* 15522 */;
import _mod15540 from "module_15540" /* 15540 */;
import defineProperty2 from "defineProperty2" /* 15553 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15540(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15522(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15522)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
