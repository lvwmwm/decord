// Module ID: 13836
// Function ID: 13837
// Dependencies: [13795, 13837, 13841]

// Module 13836
import _mod13795 from "module_13795" /* 13795 */;
import _mod13837 from "module_13837" /* 13837 */;

let tmp;
const _mod13841 = tmp(13841);
const f114685 = (arg0, arg1, arg2) => {
  const tmp3 = _mod13795(arg0);
  const tmp4 = _mod13837(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod13841(arg2, tmp4);
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
const obj = { includes: f114685, indexOf: f114685 };

export default obj;
