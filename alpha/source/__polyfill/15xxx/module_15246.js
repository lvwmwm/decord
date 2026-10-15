// Module ID: 15246
// Function ID: 15247
// Dependencies: [15247, 15260, 15208, 15229]

// Module 15246
import _mod15229 from "module_15229" /* 15229 */;
import _mod15247 from "module_15247" /* 15247 */;
import defineProperty2 from "defineProperty2" /* 15260 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15247(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15229(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15229)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
