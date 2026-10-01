// Module ID: 4869
// Function ID: 4870
// Name: findLastIndex
// Dependencies: [4870, 4872, 584]

// Module 4869 (findLastIndex)
import baseIteratee from "baseIteratee" /* 584 */;
import toInteger from "toInteger" /* 4870 */;
import baseFindIndex from "baseFindIndex" /* 4872 */;


export default function findLastIndex(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let diff = num - 1;
    if (undefined !== arg2) {
      let tmp7;
      const tmp5 = toInteger(arg2);
      if (arg2 < 0) {
        tmp7 = max(num + tmp5, 0);
      } else {
        tmp7 = min(tmp5, num - 1);
      }
      diff = tmp7;
    }
    const tmp12 = baseFindIndex;
    return tmp12(arg0, baseIteratee(arg1, 3), diff, true);
  } else {
    return -1;
  }
};
