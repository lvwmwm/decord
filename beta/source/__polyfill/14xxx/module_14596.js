// Module ID: 14596
// Function ID: 14597
// Dependencies: [14597, 14610, 14558, 14579]

// Module 14596
import _mod14579 from "module_14579" /* 14579 */;
import _mod14597 from "module_14597" /* 14597 */;
import defineProperty2 from "defineProperty2" /* 14610 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod14597(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod14579(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(14579)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
