// Module ID: 15853
// Function ID: 15854
// Dependencies: [15812, 15854, 15858]

// Module 15853
import _mod15812 from "module_15812" /* 15812 */;
import _mod15854 from "module_15854" /* 15854 */;

let tmp;
const _mod15858 = tmp(15858);
const f125179 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15812(arg0);
  const tmp4 = _mod15854(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15858(arg2, tmp4);
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
const obj = { includes: f125179, indexOf: f125179 };

export default obj;
