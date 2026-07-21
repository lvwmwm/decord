// Module ID: 9395
// Function ID: 73220
// Name: chunk
// Dependencies: []

// Module 9395 (chunk)

export default function chunk(arg0, arg1, arg2) {
  let sum;
  if (arg2) {
    let tmp = require(dependencyMap[0])(arg0, arg1, arg2);
  } else {
    tmp = undefined === arg1;
  }
  let num2 = 1;
  if (!tmp) {
    num2 = max(require(dependencyMap[1])(arg1), 0);
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
          let tmp11 = closure_0;
          let tmp12 = closure_1;
          sum = num6 + num2;
          ArrayResult[tmp10] = closure_0(closure_1[2])(arg0, num6, sum);
          num6 = sum;
        } while (sum < num4);
      }
      return ArrayResult;
    }
  }
  return [];
};
