// Module ID: 15772
// Function ID: 15773
// Dependencies: [15773, 15786, 15734, 15755]

// Module 15772
import _mod15755 from "module_15755" /* 15755 */;
import _mod15773 from "module_15773" /* 15773 */;
import defineProperty2 from "defineProperty2" /* 15786 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15773(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15755(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15755)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
