// Module ID: 15364
// Function ID: 15365
// Dependencies: [15365, 15378, 15326, 15347]

// Module 15364
import _mod15347 from "module_15347" /* 15347 */;
import _mod15365 from "module_15365" /* 15365 */;
import defineProperty2 from "defineProperty2" /* 15378 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15365(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15347(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15347)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
