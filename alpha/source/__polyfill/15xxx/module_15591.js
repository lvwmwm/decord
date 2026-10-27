// Module ID: 15591
// Function ID: 15592
// Dependencies: [15550, 15592, 15596]

// Module 15591
import _mod15550 from "module_15550" /* 15550 */;
import _mod15592 from "module_15592" /* 15592 */;

let tmp;
const _mod15596 = tmp(15596);
const f124126 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15550(arg0);
  const tmp4 = _mod15592(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15596(arg2, tmp4);
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
const obj = { includes: f124126, indexOf: f124126 };

export default obj;
