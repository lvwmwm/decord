// Module ID: 1566
// Function ID: 1567
// Dependencies: []
// Exports: isArrayEqual

// Module 1566

export const isArrayEqual = function isArrayEqual(arr, arg1) {
  const f85270 = (item, index) => Object.is(item, closure_0[index]);
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f85270);
    arr.length === arg1.length && arr.every(f85270);
  }
  return tmp;
};
