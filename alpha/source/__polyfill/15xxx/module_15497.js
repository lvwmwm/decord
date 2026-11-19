// Module ID: 15497
// Function ID: 15498
// Dependencies: [15456, 15498, 15502]

// Module 15497
import _mod15456 from "module_15456" /* 15456 */;
import _mod15498 from "module_15498" /* 15498 */;

let tmp;
const _mod15502 = tmp(15502);
const f109315 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15456(arg0);
  const tmp4 = _mod15498(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15502(arg2, tmp4);
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
const obj = { includes: f109315, indexOf: f109315 };

export default obj;
