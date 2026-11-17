// Module ID: 12009
// Function ID: 12010
// Name: chunk
// Dependencies: [7681, 6081, 12010]

// Module 12009 (chunk)
import toInteger from "toInteger" /* 6081 */;
import isIterateeCall from "isIterateeCall" /* 7681 */;
import baseSlice from "baseSlice" /* 12010 */;


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
