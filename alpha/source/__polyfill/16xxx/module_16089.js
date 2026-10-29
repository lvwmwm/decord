// Module ID: 16089
// Function ID: 16090
// Dependencies: [16048, 16090, 16094]

// Module 16089
import _mod16048 from "module_16048" /* 16048 */;
import _mod16090 from "module_16090" /* 16090 */;

let tmp;
const _mod16094 = tmp(16094);
const f126726 = (arg0, arg1, arg2) => {
  const tmp3 = _mod16048(arg0);
  const tmp4 = _mod16090(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod16094(arg2, tmp4);
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
const obj = { includes: f126726, indexOf: f126726 };

export default obj;
