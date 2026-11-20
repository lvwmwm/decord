// Module ID: 15455
// Function ID: 15456
// Dependencies: [15456, 15469, 15417, 15438]

// Module 15455
import _mod15438 from "module_15438" /* 15438 */;
import _mod15456 from "module_15456" /* 15456 */;
import defineProperty2 from "defineProperty2" /* 15469 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15456(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15438(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15438)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
