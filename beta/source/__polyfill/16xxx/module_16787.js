// Module ID: 16787
// Function ID: 16788
// Dependencies: [16788, 16801, 16749, 16770]

// Module 16787
import _mod16770 from "module_16770" /* 16770 */;
import _mod16788 from "module_16788" /* 16788 */;
import defineProperty2 from "defineProperty2" /* 16801 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16788(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16770(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16770)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
