// Module ID: 15461
// Function ID: 15462
// Dependencies: [15420, 15462, 15466]

// Module 15461
import _mod15420 from "module_15420" /* 15420 */;
import _mod15462 from "module_15462" /* 15462 */;

let tmp;
const _mod15466 = tmp(15466);
const f107649 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15420(arg0);
  const tmp4 = _mod15462(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15466(arg2, tmp4);
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
const obj = { includes: f107649, indexOf: f107649 };

export default obj;
