// Module ID: 14424
// Function ID: 14425
// Dependencies: [14383, 14425, 14429]

// Module 14424
import _mod14383 from "module_14383" /* 14383 */;
import _mod14425 from "module_14425" /* 14425 */;

let tmp;
const _mod14429 = tmp(14429);
const f117308 = (arg0, arg1, arg2) => {
  const tmp3 = _mod14383(arg0);
  const tmp4 = _mod14425(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod14429(arg2, tmp4);
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
const obj = { includes: f117308, indexOf: f117308 };

export default obj;
