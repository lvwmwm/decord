// Module ID: 15584
// Function ID: 15585
// Dependencies: [15543, 15585, 15589]

// Module 15584
import _mod15543 from "module_15543" /* 15543 */;
import _mod15585 from "module_15585" /* 15585 */;

let tmp;
const _mod15589 = tmp(15589);
const f108038 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15543(arg0);
  const tmp4 = _mod15585(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15589(arg2, tmp4);
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
const obj = { includes: f108038, indexOf: f108038 };

export default obj;
