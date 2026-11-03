// Module ID: 5968
// Function ID: 5969
// Name: basePickBy
// Dependencies: [590, 5969, 591]

// Module 5968 (basePickBy)
import baseGet from "baseGet" /* 590 */;


export default function basePickBy(arg0, arg1, fn) {
  let num;
  const obj = {};
  const length = arg1.length;
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = require;
    let tmp4 = baseGet(arg0, tmp);
    if (fn(tmp4, tmp)) {
      let tmp2Result = tmp2(5969);
      let tmp2ResultResult = tmp2Result(obj, tmp2(591)(tmp, arg0), tmp4);
    }
  }
  return obj;
};
