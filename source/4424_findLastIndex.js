// Module ID: 4424
// Function ID: 4425
// Name: findLastIndex
// Dependencies: [4425, 4427, 720]

// Module 4424 (findLastIndex)

export default function findLastIndex(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    const diff = num - 1;
    if (undefined === arg2) {
      return require(4427) /* baseFindIndex */(arg0, require(720) /* baseIteratee */(arg1, 3), diff, true);
    } else {
      let sum = require(4425) /* toInteger */(arg2);
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
