// Module ID: 14099
// Function ID: 14100
// Dependencies: [14100, 14113, 14061, 14082]

// Module 14099
import _mod14082 from "module_14082" /* 14082 */;
import _mod14100 from "module_14100" /* 14100 */;
import defineProperty2 from "defineProperty2" /* 14113 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod14100(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod14082(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(14082)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
