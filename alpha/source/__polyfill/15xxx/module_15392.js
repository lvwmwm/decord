// Module ID: 15392
// Function ID: 15393
// Dependencies: [15393, 15406, 15354, 15375]

// Module 15392
import _mod15375 from "module_15375" /* 15375 */;
import _mod15393 from "module_15393" /* 15393 */;
import defineProperty2 from "defineProperty2" /* 15406 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15393(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15375(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15375)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
