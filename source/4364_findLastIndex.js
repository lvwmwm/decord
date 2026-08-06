// Module ID: 4364
// Function ID: 4365
// Name: findLastIndex
// Dependencies: [4365, 4367, 720]

// Module 4364 (findLastIndex)

export default function findLastIndex(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    const diff = num - 1;
    if (undefined === arg2) {
      return require(4367) /* baseFindIndex */(arg0, require(720) /* baseIteratee */(arg1, 3), diff, true);
    } else {
      let sum = require(4365) /* toInteger */(arg2);
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
