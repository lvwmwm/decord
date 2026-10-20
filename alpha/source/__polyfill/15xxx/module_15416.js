// Module ID: 15416
// Function ID: 15417
// Dependencies: [15375, 15417, 15421]

// Module 15416
import _mod15375 from "module_15375" /* 15375 */;
import _mod15417 from "module_15417" /* 15417 */;

let tmp;
const _mod15421 = tmp(15421);
const f122371 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15375(arg0);
  const tmp4 = _mod15417(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15421(arg2, tmp4);
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
const obj = { includes: f122371, indexOf: f122371 };

export default obj;
