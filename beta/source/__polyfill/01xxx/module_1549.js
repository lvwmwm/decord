// Module ID: 1549
// Function ID: 1550
// Dependencies: []
// Exports: isArrayEqual

// Module 1549

export const isArrayEqual = function isArrayEqual(arr, arg1) {
  const f74322 = (item, index) => Object.is(item, closure_0[index]);
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f74322);
    arr.length === arg1.length && arr.every(f74322);
  }
  return tmp;
};
