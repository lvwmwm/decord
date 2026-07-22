// Module ID: 12695
// Function ID: 97461
// Name: maxSatisfying
// Dependencies: []

// Module 12695 (maxSatisfying)

export default function maxSatisfying(arr) {
  const require = arg2;
  let closure_1 = null;
  let closure_2 = null;
  let tmp = null;
  tmp = require(closure_1[0]);
  tmp = new tmp(arg1, arg2);
  const item = arr.forEach((arg0) => {
    if (tmp.test(arg0)) {
      let tmp = closure_1;
      if (closure_1) {
        tmp = -1 !== _null.compare(arg0);
      }
      if (!tmp) {
        closure_1 = arg0;
        let tmp5 = arg2(closure_1[1]);
        const prototype = tmp5.prototype;
        tmp5 = new tmp5(closure_1, arg2);
        const _null = tmp5;
      }
    }
  });
  return closure_1;
};
