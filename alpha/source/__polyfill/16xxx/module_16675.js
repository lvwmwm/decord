// Module ID: 16675
// Function ID: 16676
// Dependencies: [16634, 16676, 16680]

// Module 16675
import _mod16634 from "module_16634" /* 16634 */;
import _mod16676 from "module_16676" /* 16676 */;

let tmp;
const _mod16680 = tmp(16680);
const f112660 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16634(arg0);
  const tmp4 = _mod16676(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16680(arg2, tmp4);
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
const obj = { includes: f112660, indexOf: f112660 };

export default obj;
