// Module ID: 9439
// Function ID: 73483
// Name: chunk
// Dependencies: [7550, 4211, 9440]

// Module 9439 (chunk)

export default function chunk(arg0, arg1, arg2) {
  let sum;
  if (arg2) {
    let tmp = require(7550) /* isIterateeCall */(arg0, arg1, arg2);
  } else {
    tmp = undefined === arg1;
  }
  let num2 = 1;
  if (!tmp) {
    num2 = max(require(4211) /* toInteger */(arg1), 0);
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
          ArrayResult[tmp10] = require(9440) /* baseSlice */(arg0, num6, sum);
          num6 = sum;
        } while (sum < num4);
      }
      return ArrayResult;
    }
  }
  return [];
};
