// Module ID: 16517
// Function ID: 16518
// Dependencies: [16476, 16518, 16522]

// Module 16517
import _mod16476 from "module_16476" /* 16476 */;
import _mod16518 from "module_16518" /* 16518 */;

let tmp;
const _mod16522 = tmp(16522);
const f111519 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16476(arg0);
  const tmp4 = _mod16518(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16522(arg2, tmp4);
    const tmp16 = c0;
    if (tmp16) {
      if (arg1 != arg1) {
        if (tmp4 > sum) {
          while (tmp3[+sum] == tmp3[+sum]) {
            sum = tmp7 + 1;
          }
          return true;
        }
      }
      return !c0 && -1;
    }
    let sum1 = sum;
    if (tmp4 > sum) {
      let num;
      while (true) {
        num = c0;
        if (c0) {
          if (tmp3[sum1] === arg1) {
            break;
          }
        }
        sum1 = sum1 + 1;
      }
      if (!num) {
        num = sum1;
      }
      if (!num) {
        num = 0;
      }
      return num;
    }
  }
};
let c0 = false;
const obj = { includes: f111519, indexOf: f111519 };

export default obj;
