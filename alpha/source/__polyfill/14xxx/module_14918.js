// Module ID: 14918
// Function ID: 14919
// Dependencies: [14877, 14919, 14923]

// Module 14918
import _mod14877 from "module_14877" /* 14877 */;
import _mod14919 from "module_14919" /* 14919 */;

let tmp;
const _mod14923 = tmp(14923);
const f119797 = (arg0, arg1, arg2) => {
  const tmp3 = _mod14877(arg0);
  const tmp4 = _mod14919(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod14923(arg2, tmp4);
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
const obj = { includes: f119797, indexOf: f119797 };

export default obj;
