// Module ID: 1567
// Function ID: 1568
// Dependencies: []
// Exports: isArrayEqual

// Module 1567

export const isArrayEqual = function isArrayEqual(arr, arg1) {
  const f85481 = (item, index) => Object.is(item, closure_0[index]);
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f85481);
    arr.length === arg1.length && arr.every(f85481);
  }
  return tmp;
};
