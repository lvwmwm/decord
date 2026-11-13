// Module ID: 16516
// Function ID: 16517
// Dependencies: [16475, 16517, 16521]

// Module 16516
import _mod16475 from "module_16475" /* 16475 */;
import _mod16517 from "module_16517" /* 16517 */;

let tmp;
const _mod16521 = tmp(16521);
const f111497 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16475(arg0);
  const tmp4 = _mod16517(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16521(arg2, tmp4);
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
const obj = { includes: f111497, indexOf: f111497 };

export default obj;
