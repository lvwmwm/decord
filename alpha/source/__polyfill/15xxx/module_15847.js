// Module ID: 15847
// Function ID: 15848
// Dependencies: [15848, 15861, 15809, 15830]

// Module 15847
import _mod15830 from "module_15830" /* 15830 */;
import _mod15848 from "module_15848" /* 15848 */;
import defineProperty2 from "defineProperty2" /* 15861 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15848(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15830(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15830)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
