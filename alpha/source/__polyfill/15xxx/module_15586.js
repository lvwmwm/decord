// Module ID: 15586
// Function ID: 15587
// Dependencies: [15545, 15587, 15591]

// Module 15586
import _mod15545 from "module_15545" /* 15545 */;
import _mod15587 from "module_15587" /* 15587 */;

let tmp;
const _mod15591 = tmp(15591);
const f124044 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15545(arg0);
  const tmp4 = _mod15587(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15591(arg2, tmp4);
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
const obj = { includes: f124044, indexOf: f124044 };

export default obj;
