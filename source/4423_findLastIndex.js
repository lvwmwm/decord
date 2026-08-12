// Module ID: 4423
// Function ID: 4424
// Name: findLastIndex
// Dependencies: [4424, 4426, 720]

// Module 4423 (findLastIndex)

export default function findLastIndex(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    const diff = num - 1;
    if (undefined === arg2) {
      return require(4426) /* baseFindIndex */(arg0, require(720) /* baseIteratee */(arg1, 3), diff, true);
    } else {
      let sum = require(4424) /* toInteger */(arg2);
      if (arg2 < 0) {
        sum = num + sum;
        let tmp7 = max(sum, 0);
      } else {
        tmp7 = min(sum, num - 1);
      }
    }
  } else {
    return -1;
  }
};
