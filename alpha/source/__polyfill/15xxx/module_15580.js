// Module ID: 15580
// Function ID: 15581
// Dependencies: [15581, 15594, 15542, 15563]

// Module 15580
import _mod15563 from "module_15563" /* 15563 */;
import _mod15581 from "module_15581" /* 15581 */;
import defineProperty2 from "defineProperty2" /* 15594 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15581(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15563(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15563)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
