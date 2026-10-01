// Module ID: 13834
// Function ID: 13835
// Dependencies: [13793, 13835, 13839]

// Module 13834
import _mod13793 from "module_13793" /* 13793 */;
import _mod13835 from "module_13835" /* 13835 */;

let tmp;
const _mod13839 = tmp(13839);
const f98432 = (arg0, arg1, arg2) => {
  const tmp3 = _mod13793(arg0);
  const tmp4 = _mod13835(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod13839(arg2, tmp4);
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
const obj = { includes: f98432, indexOf: f98432 };

export default obj;
