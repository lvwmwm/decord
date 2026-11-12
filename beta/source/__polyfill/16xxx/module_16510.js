// Module ID: 16510
// Function ID: 16511
// Dependencies: [16511, 16524, 16472, 16493]

// Module 16510
import _mod16493 from "module_16493" /* 16493 */;
import _mod16511 from "module_16511" /* 16511 */;
import defineProperty2 from "defineProperty2" /* 16524 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16511(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16493(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16493)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
