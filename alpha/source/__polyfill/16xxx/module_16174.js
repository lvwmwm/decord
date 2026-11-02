// Module ID: 16174
// Function ID: 16175
// Dependencies: [16133, 16175, 16179]

// Module 16174
import _mod16133 from "module_16133" /* 16133 */;
import _mod16175 from "module_16175" /* 16175 */;

let tmp;
const _mod16179 = tmp(16179);
const f109392 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16133(arg0);
  const tmp4 = _mod16175(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16179(arg2, tmp4);
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
const obj = { includes: f109392, indexOf: f109392 };

export default obj;
