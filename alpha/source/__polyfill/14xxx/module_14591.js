// Module ID: 14591
// Function ID: 14592
// Dependencies: [14592, 14605, 14553, 14574]

// Module 14591
import _mod14574 from "module_14574" /* 14574 */;
import _mod14592 from "module_14592" /* 14592 */;
import defineProperty2 from "defineProperty2" /* 14605 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod14592(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod14574(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(14574)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
