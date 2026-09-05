// Module ID: 4673
// Function ID: 4674
// Name: basePickBy
// Dependencies: [591, 4674, 592]

// Module 4673 (basePickBy)
import baseGet from "baseGet" /* 591 */;


export default function basePickBy(arg0, arg1, arg2) {
  const obj = {};
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = require;
    let tmp3 = dependencyMap;
    let tmp4 = baseGet(arg0, tmp);
    let tmp5 = num;
    if (arg2(tmp4, tmp)) {
      let tmp2Result = tmp2(4674);
      let tmp2ResultResult = tmp2Result(obj, tmp2(592)(tmp, arg0), tmp4);
    }
  }
  return obj;
};
