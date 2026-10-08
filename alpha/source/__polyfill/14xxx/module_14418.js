// Module ID: 14418
// Function ID: 14419
// Dependencies: [14419, 14432, 14380, 14401]

// Module 14418
import _mod14401 from "module_14401" /* 14401 */;
import _mod14419 from "module_14419" /* 14419 */;
import defineProperty2 from "defineProperty2" /* 14432 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod14419(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod14401(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(14401)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
