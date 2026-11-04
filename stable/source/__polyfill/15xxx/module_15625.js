// Module ID: 15625
// Function ID: 15626
// Dependencies: [15584, 15626, 15630]

// Module 15625
import _mod15584 from "module_15584" /* 15584 */;
import _mod15626 from "module_15626" /* 15626 */;

let tmp;
const _mod15630 = tmp(15630);
const f124209 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15584(arg0);
  const tmp4 = _mod15626(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15630(arg2, tmp4);
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
const obj = { includes: f124209, indexOf: f124209 };

export default obj;
