// Module ID: 4206
// Function ID: 36559
// Name: findLastIndex
// Dependencies: []

// Module 4206 (findLastIndex)

export default function findLastIndex(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    const diff = num - 1;
    if (undefined === arg2) {
      return require(dependencyMap[1])(arg0, require(dependencyMap[2])(arg1, 3), diff, true);
    } else {
      let sum = require(dependencyMap[0])(arg2);
      if (arg2 < 0) {
        sum = num + sum;
        let tmp6 = max(sum, 0);
      } else {
        tmp6 = min(sum, num - 1);
      }
    }
  } else {
    return -1;
  }
};
