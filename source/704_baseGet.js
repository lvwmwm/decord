// Module ID: 704
// Function ID: 8713
// Name: baseGet
// Dependencies: [705, 702]

// Module 704 (baseGet)

export default function baseGet(arg0, arg1) {
  const arr = require(705) /* castPath */(arg1, arg0);
  let tmp = arg0;
  let num = 0;
  if (null != arg0) {
    let tmp2 = arg0;
    let num3 = 0;
    tmp = arg0;
    num = 0;
    if (0 < length) {
      const sum = tmp5 + 1;
      const tmp7 = tmp2[require(undefined, 702) /* toKey */(undefined, arr[+num3])];
      tmp = tmp7;
      num = sum;
      while (null != tmp7) {
        tmp2 = tmp7;
        num3 = sum;
        tmp = tmp7;
        num = sum;
        if (sum >= length) {
          break;
        }
      }
    }
  }
  let tmp8;
  if (num) {
    if (num == length) {
      tmp8 = tmp;
    }
  }
  return tmp8;
};
