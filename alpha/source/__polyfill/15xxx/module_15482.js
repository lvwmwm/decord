// Module ID: 15482
// Function ID: 15483
// Dependencies: [15483, 15496, 15444, 15465]

// Module 15482
import _mod15465 from "module_15465" /* 15465 */;
import _mod15483 from "module_15483" /* 15483 */;
import defineProperty2 from "defineProperty2" /* 15496 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15483(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15465(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15465)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
