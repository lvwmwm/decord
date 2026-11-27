// Module ID: 15779
// Function ID: 15780
// Dependencies: [15780, 15793, 15741, 15762]

// Module 15779
import _mod15762 from "module_15762" /* 15762 */;
import _mod15780 from "module_15780" /* 15780 */;
import defineProperty2 from "defineProperty2" /* 15793 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15780(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15762(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15762)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
