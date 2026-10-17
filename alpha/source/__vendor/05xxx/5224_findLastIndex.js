// Module ID: 5224
// Function ID: 5225
// Name: findLastIndex
// Dependencies: [5225, 5227, 595]

// Module 5224 (findLastIndex)
import baseIteratee from "baseIteratee" /* 595 */;
import toInteger from "toInteger" /* 5225 */;
import baseFindIndex from "baseFindIndex" /* 5227 */;


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
