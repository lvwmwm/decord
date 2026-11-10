// Module ID: 16514
// Function ID: 16515
// Dependencies: [16473, 16515, 16519]

// Module 16514
import _mod16473 from "module_16473" /* 16473 */;
import _mod16515 from "module_16515" /* 16515 */;

let tmp;
const _mod16519 = tmp(16519);
const f111550 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16473(arg0);
  const tmp4 = _mod16515(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16519(arg2, tmp4);
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
const obj = { includes: f111550, indexOf: f111550 };

export default obj;
