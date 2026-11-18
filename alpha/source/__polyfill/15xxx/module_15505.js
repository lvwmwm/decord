// Module ID: 15505
// Function ID: 15506
// Dependencies: [15506, 15519, 15467, 15488]

// Module 15505
import _mod15488 from "module_15488" /* 15488 */;
import _mod15506 from "module_15506" /* 15506 */;
import defineProperty2 from "defineProperty2" /* 15519 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15506(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15488(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15488)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
