// Module ID: 14574
// Function ID: 14575
// Dependencies: [14533, 14575, 14579]

// Module 14574
import _mod14533 from "module_14533" /* 14533 */;
import _mod14575 from "module_14575" /* 14575 */;

let tmp;
const _mod14579 = tmp(14579);
const f117964 = (arg0, arg1, arg2) => {
  const tmp3 = _mod14533(arg0);
  const tmp4 = _mod14575(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod14579(arg2, tmp4);
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
const obj = { includes: f117964, indexOf: f117964 };

export default obj;
