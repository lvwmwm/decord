// Module ID: 14105
// Function ID: 14106
// Dependencies: [14064, 14106, 14110]

// Module 14105
import _mod14064 from "module_14064" /* 14064 */;
import _mod14106 from "module_14106" /* 14106 */;

let tmp;
const _mod14110 = tmp(14110);
const f115749 = (arg0, arg1, arg2) => {
  const tmp3 = _mod14064(arg0);
  const tmp4 = _mod14106(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod14110(arg2, tmp4);
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
const obj = { includes: f115749, indexOf: f115749 };

export default obj;
