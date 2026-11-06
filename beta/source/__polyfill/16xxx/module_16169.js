// Module ID: 16169
// Function ID: 16170
// Dependencies: [16128, 16170, 16174]

// Module 16169
import _mod16128 from "module_16128" /* 16128 */;
import _mod16170 from "module_16170" /* 16170 */;

let tmp;
const _mod16174 = tmp(16174);
const f109383 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16128(arg0);
  const tmp4 = _mod16170(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16174(arg2, tmp4);
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
const obj = { includes: f109383, indexOf: f109383 };

export default obj;
