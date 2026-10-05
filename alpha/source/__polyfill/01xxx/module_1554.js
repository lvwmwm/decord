// Module ID: 1554
// Function ID: 1555
// Dependencies: []
// Exports: isArrayEqual

// Module 1554

export const isArrayEqual = function isArrayEqual(arr, arg1) {
  const f84258 = (item, index) => Object.is(item, closure_0[index]);
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f84258);
    arr.length === arg1.length && arr.every(f84258);
  }
  return tmp;
};
