// Module ID: 15281
// Function ID: 15282
// Dependencies: [15282, 15295, 15243, 15264]

// Module 15281
import _mod15264 from "module_15264" /* 15264 */;
import _mod15282 from "module_15282" /* 15282 */;
import defineProperty2 from "defineProperty2" /* 15295 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod15282(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod15264(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(15264)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
