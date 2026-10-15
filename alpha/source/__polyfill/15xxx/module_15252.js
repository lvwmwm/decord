// Module ID: 15252
// Function ID: 15253
// Dependencies: [15211, 15253, 15257]

// Module 15252
import _mod15211 from "module_15211" /* 15211 */;
import _mod15253 from "module_15253" /* 15253 */;

let tmp;
const _mod15257 = tmp(15257);
const f120834 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15211(arg0);
  const tmp4 = _mod15253(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15257(arg2, tmp4);
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
const obj = { includes: f120834, indexOf: f120834 };

export default obj;
