// Module ID: 9359
// Function ID: 73070
// Name: chunk
// Dependencies: [6646, 4212, 9360]

// Module 9359 (chunk)

export default function chunk(arg0, arg1, arg2) {
  let sum;
  if (arg2) {
    let tmp = require(6646) /* isIterateeCall */(arg0, arg1, arg2);
  } else {
    tmp = undefined === arg1;
  }
  let num2 = 1;
  if (!tmp) {
    num2 = max(require(4212) /* toInteger */(arg1), 0);
  }
  let num4 = 0;
  if (null != arg0) {
    num4 = arg0.length;
  }
  if (num4) {
    if (num2 >= 1) {
      const _Array = Array;
      const ArrayResult = Array(ceil(num4 / num2));
      let num6 = 0;
      let num7 = 0;
      if (0 < num4) {
        do {
          let tmp10 = +num7;
          num7 = tmp10 + 1;
          let tmp11 = require;
          let tmp12 = dependencyMap;
          sum = num6 + num2;
          ArrayResult[tmp10] = require(9360) /* baseSlice */(arg0, num6, sum);
          num6 = sum;
        } while (sum < num4);
      }
      return ArrayResult;
    }
  }
  return [];
};
