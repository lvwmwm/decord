// Module ID: 14956
// Function ID: 14957
// Dependencies: [14915, 14957, 14961]

// Module 14956
import _mod14915 from "module_14915" /* 14915 */;
import _mod14957 from "module_14957" /* 14957 */;

let tmp;
const _mod14961 = tmp(14961);
const f120162 = (arg0, arg1, arg2) => {
  const tmp3 = _mod14915(arg0);
  const tmp4 = _mod14957(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod14961(arg2, tmp4);
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
const obj = { includes: f120162, indexOf: f120162 };

export default obj;
