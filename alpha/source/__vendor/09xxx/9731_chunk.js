// Module ID: 9731
// Function ID: 9732
// Name: chunk
// Dependencies: [7793, 5801, 9732]

// Module 9731 (chunk)
import toInteger from "toInteger" /* 5801 */;
import isIterateeCall from "isIterateeCall" /* 7793 */;
import baseSlice from "baseSlice" /* 9732 */;


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
