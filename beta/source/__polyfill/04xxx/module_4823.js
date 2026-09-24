// Module ID: 4823
// Function ID: 4824
// Dependencies: [4824, 4826, 588]

// Module 4823
import baseIteratee from "baseIteratee" /* 588 */;
import _mod4824 from "module_4824" /* 4824 */;
import baseFindIndex from "baseFindIndex" /* 4826 */;


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
      let sum = _mod4824(arg2);
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
