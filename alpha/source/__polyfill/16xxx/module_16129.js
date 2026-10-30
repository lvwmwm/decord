// Module ID: 16129
// Function ID: 16130
// Dependencies: [16088, 16130, 16134]

// Module 16129
import _mod16088 from "module_16088" /* 16088 */;
import _mod16130 from "module_16130" /* 16130 */;

let tmp;
const _mod16134 = tmp(16134);
const f109048 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16088(arg0);
  const tmp4 = _mod16130(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16134(arg2, tmp4);
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
const obj = { includes: f109048, indexOf: f109048 };

export default obj;
