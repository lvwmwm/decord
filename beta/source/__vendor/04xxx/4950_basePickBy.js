// Module ID: 4950
// Function ID: 4951
// Name: basePickBy
// Dependencies: [603, 4951, 604]

// Module 4950 (basePickBy)
import baseGet from "baseGet" /* 603 */;


export default function basePickBy(arg0, arg1, fn) {
  let num;
  const obj = {};
  const length = arg1.length;
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = require;
    let tmp4 = baseGet(arg0, tmp);
    if (fn(tmp4, tmp)) {
      let tmp2Result = tmp2(4951);
      let tmp2ResultResult = tmp2Result(obj, tmp2(604)(tmp, arg0), tmp4);
    }
  }
  return obj;
};
