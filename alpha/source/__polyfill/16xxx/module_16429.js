// Module ID: 16429
// Function ID: 16430
// Dependencies: [16388, 16430, 16434]

// Module 16429
import _mod16388 from "module_16388" /* 16388 */;
import _mod16430 from "module_16430" /* 16430 */;

let tmp;
const _mod16434 = tmp(16434);
const f110830 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16388(arg0);
  const tmp4 = _mod16430(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16434(arg2, tmp4);
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
const obj = { includes: f110830, indexOf: f110830 };

export default obj;
