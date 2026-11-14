// Module ID: 11313
// Function ID: 11314
// Name: chunk
// Dependencies: [7671, 6084, 11314]

// Module 11313 (chunk)
import toInteger from "toInteger" /* 6084 */;
import isIterateeCall from "isIterateeCall" /* 7671 */;
import baseSlice from "baseSlice" /* 11314 */;


export default function chunk(arg0, arg1, arg2) {
  let sum1;
  let tmp;
  if (arg2) {
    tmp = isIterateeCall(arg0, arg1, arg2);
  } else {
    tmp = undefined === arg1;
  }
  let num = 1;
  if (!tmp) {
    num = max(toInteger(arg1), 0);
  }
  let num3 = 0;
  if (null != arg0) {
    num3 = arg0.length;
  }
  if (num3) {
    if (num >= 1) {
      const _Array = Array;
      const ArrayResult = Array(ceil(num3 / num));
      let num4 = 0;
      let num5 = 0;
      if (0 < num3) {
        do {
          let sum = num4 + 1;
          sum1 = num5 + num;
          ArrayResult[num4] = baseSlice(arg0, num5, sum1);
          num4 = sum;
          num5 = sum1;
        } while (sum1 < num3);
      }
      return ArrayResult;
    }
  }
  return [];
};
