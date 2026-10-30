// Module ID: 16123
// Function ID: 16124
// Dependencies: [16124, 16137, 16085, 16106]

// Module 16123
import _mod16106 from "module_16106" /* 16106 */;
import _mod16124 from "module_16124" /* 16124 */;
import defineProperty2 from "defineProperty2" /* 16137 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16124(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16106(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16106)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
