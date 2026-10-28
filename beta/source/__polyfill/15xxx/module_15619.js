// Module ID: 15619
// Function ID: 15620
// Dependencies: [15620, 15633, 15581, 15602]

// Module 15619
import _mod15602 from "module_15602" /* 15602 */;
import _mod15620 from "module_15620" /* 15620 */;
import defineProperty2 from "defineProperty2" /* 15633 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15620(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15602(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15602)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
