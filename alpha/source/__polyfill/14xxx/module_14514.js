// Module ID: 14514
// Function ID: 14515
// Dependencies: [14515, 14528, 14476, 14497]

// Module 14514
import _mod14497 from "module_14497" /* 14497 */;
import _mod14515 from "module_14515" /* 14515 */;
import defineProperty2 from "defineProperty2" /* 14528 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod14515(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod14497(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(14497)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
