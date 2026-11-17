// Module ID: 16828
// Function ID: 16829
// Dependencies: [16787, 16829, 16833]

// Module 16828
import _mod16787 from "module_16787" /* 16787 */;
import _mod16829 from "module_16829" /* 16829 */;

let tmp;
const _mod16833 = tmp(16833);
const f114234 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16787(arg0);
  const tmp4 = _mod16829(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16833(arg2, tmp4);
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
const obj = { includes: f114234, indexOf: f114234 };

export default obj;
