// Module ID: 15366
// Function ID: 15367
// Dependencies: [15325, 15367, 15371]

// Module 15366
import _mod15325 from "module_15325" /* 15325 */;
import _mod15367 from "module_15367" /* 15367 */;

let tmp;
const _mod15371 = tmp(15371);
const f121655 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15325(arg0);
  const tmp4 = _mod15367(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15371(arg2, tmp4);
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
const obj = { includes: f121655, indexOf: f121655 };

export default obj;
