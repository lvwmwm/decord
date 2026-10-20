// Module ID: 1569
// Function ID: 1570
// Dependencies: []
// Exports: isArrayEqual

// Module 1569

export const isArrayEqual = function isArrayEqual(arr, arg1) {
  const f87113 = (item, index) => Object.is(item, closure_0[index]);
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f87113);
    arr.length === arg1.length && arr.every(f87113);
  }
  return tmp;
};
