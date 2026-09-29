// Module ID: 4821
// Function ID: 4822
// Dependencies: [4822, 4824, 584]

// Module 4821
import baseIteratee from "baseIteratee" /* 584 */;
import _mod4822 from "module_4822" /* 4822 */;
import baseFindIndex from "baseFindIndex" /* 4824 */;


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
      let sum = _mod4822(arg2);
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
