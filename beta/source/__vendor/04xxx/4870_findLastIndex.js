// Module ID: 4870
// Function ID: 4871
// Name: findLastIndex
// Dependencies: [4871, 4873, 596]

// Module 4870 (findLastIndex)
import baseIteratee from "baseIteratee" /* 596 */;
import toInteger from "toInteger" /* 4871 */;
import baseFindIndex from "baseFindIndex" /* 4873 */;


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
