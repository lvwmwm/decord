// Module ID: 1512
// Function ID: 17397
// Name: isArrayEqual
// Dependencies: []

// Module 1512 (isArrayEqual)
arg5.default = function isArrayEqual(arr) {
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every((arg0, arg1) => arg0 === arg1[arg1]);
    const tmp2 = arr.length === arg1.length && arr.every((arg0, arg1) => arg0 === arg1[arg1]);
  }
  return tmp;
};
