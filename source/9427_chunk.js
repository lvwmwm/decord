// Module ID: 9427
// Function ID: 9428
// Name: chunk
// Dependencies: [6703, 4270, 9428]

// Module 9427 (chunk)

export default function chunk(arg0, arg1, arg2) {
  let sum1;
  if (arg2) {
    let tmp = require(6703) /* isIterateeCall */(arg0, arg1, arg2);
  } else {
    tmp = undefined === arg1;
  }
  let num = 1;
  if (!tmp) {
    num = max(require(4270) /* toInteger */(arg1), 0);
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
          let tmp11 = require;
          let tmp12 = dependencyMap;
          let sum = num4 + 1;
          sum1 = num5 + num;
          ArrayResult[num4] = require(9428) /* baseSlice */(arg0, num5, sum1);
          num4 = sum;
          num5 = sum1;
        } while (sum1 < num3);
      }
      return ArrayResult;
    }
  }
  return [];
};
