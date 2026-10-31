// Module ID: 16164
// Function ID: 16165
// Dependencies: [16165, 16178, 16126, 16147]

// Module 16164
import _mod16147 from "module_16147" /* 16147 */;
import _mod16165 from "module_16165" /* 16165 */;
import defineProperty2 from "defineProperty2" /* 16178 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16165(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16147(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16147)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
