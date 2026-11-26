// Module ID: 15596
// Function ID: 15597
// Dependencies: [15555, 15597, 15601]

// Module 15596
import _mod15555 from "module_15555" /* 15555 */;
import _mod15597 from "module_15597" /* 15597 */;

let tmp;
const _mod15601 = tmp(15601);
const f108073 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15555(arg0);
  const tmp4 = _mod15597(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15601(arg2, tmp4);
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
const obj = { includes: f108073, indexOf: f108073 };

export default obj;
