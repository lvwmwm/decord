// Module ID: 4791
// Function ID: 4792
// Dependencies: [4792, 4794, 588]

// Module 4791
import baseIteratee from "baseIteratee" /* 588 */;
import _mod4792 from "module_4792" /* 4792 */;
import baseFindIndex from "baseFindIndex" /* 4794 */;


export default function findLastIndex(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    const diff = num - 1;
    if (undefined === arg2) {
      return baseFindIndex(arg0, baseIteratee(arg1, 3), diff, true);
    } else {
      let sum = _mod4792(arg2);
      if (arg2 < 0) {
        sum = num + sum;
        let tmp7 = max(sum, 0);
      } else {
        tmp7 = min(sum, num - 1);
      }
    }
  } else {
    return -1;
  }
};
