// Module ID: 15532
// Function ID: 15533
// Dependencies: [15491, 15533, 15537]

// Module 15532
import _mod15491 from "module_15491" /* 15491 */;
import _mod15533 from "module_15533" /* 15533 */;

let tmp;
const _mod15537 = tmp(15537);
const f123434 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15491(arg0);
  const tmp4 = _mod15533(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15537(arg2, tmp4);
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
const obj = { includes: f123434, indexOf: f123434 };

export default obj;
