// Module ID: 4527
// Function ID: 4528
// Name: findLastIndex
// Dependencies: [4528, 4530, 720]

// Module 4527 (findLastIndex)
import baseIteratee from "baseIteratee" /* 720 */;
import toInteger from "toInteger" /* 4528 */;
import baseFindIndex from "baseFindIndex" /* 4530 */;


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
      let sum = toInteger(arg2);
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
