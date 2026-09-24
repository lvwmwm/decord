// Module ID: 4903
// Function ID: 4904
// Name: basePickBy
// Dependencies: [595, 4904, 596]

// Module 4903 (basePickBy)
import baseGet from "baseGet" /* 595 */;


export default function basePickBy(arg0, arg1, fn) {
  const obj = {};
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = require;
    let tmp4 = baseGet(arg0, tmp);
    if (fn(tmp4, tmp)) {
      let tmp2Result = tmp2(4904);
      let tmp2ResultResult = tmp2Result(obj, tmp2(596)(tmp, arg0), tmp4);
    }
  }
  return obj;
};
