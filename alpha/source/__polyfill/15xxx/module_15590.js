// Module ID: 15590
// Function ID: 15591
// Dependencies: [15549, 15591, 15595]

// Module 15590
import _mod15549 from "module_15549" /* 15549 */;
import _mod15591 from "module_15591" /* 15591 */;

let tmp;
const _mod15595 = tmp(15595);
const f124082 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15549(arg0);
  const tmp4 = _mod15591(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15595(arg2, tmp4);
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
const obj = { includes: f124082, indexOf: f124082 };

export default obj;
