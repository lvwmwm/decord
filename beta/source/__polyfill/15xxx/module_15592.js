// Module ID: 15592
// Function ID: 15593
// Dependencies: [15551, 15593, 15597]

// Module 15592
import _mod15551 from "module_15551" /* 15551 */;
import _mod15593 from "module_15593" /* 15593 */;

let tmp;
const _mod15597 = tmp(15597);
const f108062 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15551(arg0);
  const tmp4 = _mod15593(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15597(arg2, tmp4);
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
const obj = { includes: f108062, indexOf: f108062 };

export default obj;
