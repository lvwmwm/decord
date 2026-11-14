// Module ID: 16793
// Function ID: 16794
// Dependencies: [16752, 16794, 16798]

// Module 16793
import _mod16752 from "module_16752" /* 16752 */;
import _mod16794 from "module_16794" /* 16794 */;

let tmp;
const _mod16798 = tmp(16798);
const f113968 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16752(arg0);
  const tmp4 = _mod16794(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16798(arg2, tmp4);
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
const obj = { includes: f113968, indexOf: f113968 };

export default obj;
