// Module ID: 14602
// Function ID: 14603
// Dependencies: [14561, 14603, 14607]

// Module 14602
import _mod14561 from "module_14561" /* 14561 */;
import _mod14603 from "module_14603" /* 14603 */;

let tmp;
const _mod14607 = tmp(14607);
const f118197 = (arg0, arg1, arg2) => {
  const tmp3 = _mod14561(arg0);
  const tmp4 = _mod14603(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod14607(arg2, tmp4);
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
const obj = { includes: f118197, indexOf: f118197 };

export default obj;
