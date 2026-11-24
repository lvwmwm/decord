// Module ID: 15582
// Function ID: 15583
// Dependencies: [15541, 15583, 15587]

// Module 15582
import _mod15541 from "module_15541" /* 15541 */;
import _mod15583 from "module_15583" /* 15583 */;

let tmp;
const _mod15587 = tmp(15587);
const f108020 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15541(arg0);
  const tmp4 = _mod15583(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15587(arg2, tmp4);
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
const obj = { includes: f108020, indexOf: f108020 };

export default obj;
