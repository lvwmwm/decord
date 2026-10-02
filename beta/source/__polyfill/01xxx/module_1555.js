// Module ID: 1555
// Function ID: 1556
// Dependencies: []
// Exports: isArrayEqual

// Module 1555

export const isArrayEqual = function isArrayEqual(arr, arg1) {
  const f83196 = (item, index) => Object.is(item, closure_0[index]);
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f83196);
    arr.length === arg1.length && arr.every(f83196);
  }
  return tmp;
};
