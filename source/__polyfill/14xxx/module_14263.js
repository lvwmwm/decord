// Module ID: 14263
// Function ID: 14264
// Dependencies: [14264, 14277, 14225, 14246]

// Module 14263
import call from "call" /* 14246 */;
import _mod14264 from "module_14264" /* 14264 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14264(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp4 = require;
    let tmp5 = dependencyMap;
    let tmp6 = call(arg0, tmp3);
    let tmp7 = num;
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = tmp4(14246)(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
