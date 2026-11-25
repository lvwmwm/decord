// Module ID: 15727
// Function ID: 15728
// Dependencies: [15686, 15728, 15732]

// Module 15727
import _mod15686 from "module_15686" /* 15686 */;
import _mod15728 from "module_15728" /* 15728 */;

let tmp;
const _mod15732 = tmp(15732);
const f108598 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15686(arg0);
  const tmp4 = _mod15728(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15732(arg2, tmp4);
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
const obj = { includes: f108598, indexOf: f108598 };

export default obj;
