// Module ID: 15287
// Function ID: 15288
// Dependencies: [15246, 15288, 15292]

// Module 15287
import _mod15246 from "module_15246" /* 15246 */;
import _mod15288 from "module_15288" /* 15288 */;

let tmp;
const _mod15292 = tmp(15292);
const f121247 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15246(arg0);
  const tmp4 = _mod15288(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15292(arg2, tmp4);
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
const obj = { includes: f121247, indexOf: f121247 };

export default obj;
