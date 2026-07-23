// Module ID: 4210
// Function ID: 36606
// Name: findLastIndex
// Dependencies: [4211, 4213, 697]

// Module 4210 (findLastIndex)

export default function findLastIndex(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    const diff = num - 1;
    if (undefined === arg2) {
      return require(4213) /* baseFindIndex */(arg0, require(697) /* baseIteratee */(arg1, 3), diff, true);
    } else {
      let sum = require(4211) /* toInteger */(arg2);
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
