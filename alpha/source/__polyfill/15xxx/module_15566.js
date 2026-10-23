// Module ID: 15566
// Function ID: 15567
// Dependencies: [15525, 15567, 15571]

// Module 15566
import _mod15525 from "module_15525" /* 15525 */;
import _mod15567 from "module_15567" /* 15567 */;

let tmp;
const _mod15571 = tmp(15571);
const f123764 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15525(arg0);
  const tmp4 = _mod15567(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15571(arg2, tmp4);
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
const obj = { includes: f123764, indexOf: f123764 };

export default obj;
