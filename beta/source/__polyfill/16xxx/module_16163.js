// Module ID: 16163
// Function ID: 16164
// Dependencies: [16164, 16177, 16125, 16146]

// Module 16163
import _mod16146 from "module_16146" /* 16146 */;
import _mod16164 from "module_16164" /* 16164 */;
import defineProperty2 from "defineProperty2" /* 16177 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod16164(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod16146(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(16146)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
