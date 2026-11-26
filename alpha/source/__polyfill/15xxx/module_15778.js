// Module ID: 15778
// Function ID: 15779
// Dependencies: [15737, 15779, 15783]

// Module 15778
import _mod15737 from "module_15737" /* 15737 */;
import _mod15779 from "module_15779" /* 15779 */;

let tmp;
const _mod15783 = tmp(15783);
const f108902 = (arg0, arg1, arg2) => {
  const tmp3 = _mod15737(arg0);
  const tmp4 = _mod15779(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod15783(arg2, tmp4);
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
const obj = { includes: f108902, indexOf: f108902 };

export default obj;
