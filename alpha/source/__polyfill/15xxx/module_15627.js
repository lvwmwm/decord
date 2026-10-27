// Module ID: 15627
// Function ID: 15628
// Dependencies: [15586, 15628, 15632]

// Module 15627
import _mod15586 from "module_15586" /* 15586 */;
import _mod15628 from "module_15628" /* 15628 */;

let tmp;
const _mod15632 = tmp(15632);
const f124452 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15586(arg0);
  const tmp4 = _mod15628(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15632(arg2, tmp4);
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
const obj = { includes: f124452, indexOf: f124452 };

export default obj;
