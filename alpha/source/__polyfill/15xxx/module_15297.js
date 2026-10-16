// Module ID: 15297
// Function ID: 15298
// Dependencies: [15256, 15298, 15302]

// Module 15297
import _mod15256 from "module_15256" /* 15256 */;
import _mod15298 from "module_15298" /* 15298 */;

let tmp;
const _mod15302 = tmp(15302);
const f121333 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15256(arg0);
  const tmp4 = _mod15298(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15302(arg2, tmp4);
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
const obj = { includes: f121333, indexOf: f121333 };

export default obj;
