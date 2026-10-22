// Module ID: 15545
// Function ID: 15546
// Dependencies: [15504, 15546, 15550]

// Module 15545
import _mod15504 from "module_15504" /* 15504 */;
import _mod15546 from "module_15546" /* 15546 */;

let tmp;
const _mod15550 = tmp(15550);
const f123571 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15504(arg0);
  const tmp4 = _mod15546(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15550(arg2, tmp4);
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
const obj = { includes: f123571, indexOf: f123571 };

export default obj;
