// Module ID: 14520
// Function ID: 14521
// Dependencies: [14479, 14521, 14525]

// Module 14520
import _mod14479 from "module_14479" /* 14479 */;
import _mod14521 from "module_14521" /* 14521 */;

let tmp;
const _mod14525 = tmp(14525);
const f117651 = (arg0, arg1, arg2) => {
  const tmp3 = _mod14479(arg0);
  const tmp4 = _mod14521(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod14525(arg2, tmp4);
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
const obj = { includes: f117651, indexOf: f117651 };

export default obj;
