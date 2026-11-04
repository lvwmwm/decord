// Module ID: 16406
// Function ID: 16407
// Dependencies: [16365, 16407, 16411]

// Module 16406
import _mod16365 from "module_16365" /* 16365 */;
import _mod16407 from "module_16407" /* 16407 */;

let tmp;
const _mod16411 = tmp(16411);
const f110023 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16365(arg0);
  const tmp4 = _mod16407(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16411(arg2, tmp4);
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
const obj = { includes: f110023, indexOf: f110023 };

export default obj;
