// Module ID: 5195
// Function ID: 5196
// Name: basePickBy
// Dependencies: [602, 5196, 603]

// Module 5195 (basePickBy)
import baseGet from "baseGet" /* 602 */;


export default function basePickBy(arg0, arg1, fn) {
  let num;
  const obj = {};
  const length = arg1.length;
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = require;
    let tmp4 = baseGet(arg0, tmp);
    if (fn(tmp4, tmp)) {
      let tmp2Result = tmp2(5196);
      let tmp2ResultResult = tmp2Result(obj, tmp2(603)(tmp, arg0), tmp4);
    }
  }
  return obj;
};
