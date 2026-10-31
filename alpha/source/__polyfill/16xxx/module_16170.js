// Module ID: 16170
// Function ID: 16171
// Dependencies: [16129, 16171, 16175]

// Module 16170
import _mod16129 from "module_16129" /* 16129 */;
import _mod16171 from "module_16171" /* 16171 */;

let tmp;
const _mod16175 = tmp(16175);
const f109350 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16129(arg0);
  const tmp4 = _mod16171(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16175(arg2, tmp4);
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
const obj = { includes: f109350, indexOf: f109350 };

export default obj;
