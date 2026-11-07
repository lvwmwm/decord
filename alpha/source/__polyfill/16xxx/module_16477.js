// Module ID: 16477
// Function ID: 16478
// Dependencies: [16436, 16478, 16482]

// Module 16477
import _mod16436 from "module_16436" /* 16436 */;
import _mod16478 from "module_16478" /* 16478 */;

let tmp;
const _mod16482 = tmp(16482);
const f111310 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16436(arg0);
  const tmp4 = _mod16478(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16482(arg2, tmp4);
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
const obj = { includes: f111310, indexOf: f111310 };

export default obj;
