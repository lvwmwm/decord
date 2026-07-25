// Module ID: 4211
// Function ID: 36618
// Name: findLastIndex
// Dependencies: [4212, 4214, 697]

// Module 4211 (findLastIndex)

export default function findLastIndex(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    const diff = num - 1;
    if (undefined === arg2) {
      return require(4214) /* baseFindIndex */(arg0, require(697) /* baseIteratee */(arg1, 3), diff, true);
    } else {
      let sum = require(4212) /* toInteger */(arg2);
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
