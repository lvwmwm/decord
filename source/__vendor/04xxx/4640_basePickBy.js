// Module ID: 4640
// Function ID: 4641
// Name: basePickBy
// Dependencies: [724, 4641, 725]

// Module 4640 (basePickBy)
import baseGet from "baseGet" /* 724 */;


export default function basePickBy(arg0, arg1, arg2) {
  const obj = {};
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = require;
    let tmp3 = dependencyMap;
    let tmp4 = baseGet(arg0, tmp);
    let tmp5 = num;
    if (arg2(tmp4, tmp)) {
      let tmp2Result = tmp2(4641);
      let tmp2ResultResult = tmp2Result(obj, tmp2(725)(tmp, arg0), tmp4);
    }
  }
  return obj;
};
