// Module ID: 16317
// Function ID: 16318
// Dependencies: [16276, 16318, 16322]

// Module 16317
import _mod16276 from "module_16276" /* 16276 */;
import _mod16318 from "module_16318" /* 16318 */;

let tmp;
const _mod16322 = tmp(16322);
const f109306 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16276(arg0);
  const tmp4 = _mod16318(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16322(arg2, tmp4);
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
const obj = { includes: f109306, indexOf: f109306 };

export default obj;
