// Module ID: 15721
// Function ID: 15722
// Dependencies: [15722, 15735, 15683, 15704]

// Module 15721
import _mod15704 from "module_15704" /* 15704 */;
import _mod15722 from "module_15722" /* 15722 */;
import defineProperty2 from "defineProperty2" /* 15735 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15722(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15704(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15704)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
