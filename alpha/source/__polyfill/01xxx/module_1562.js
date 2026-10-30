// Module ID: 1562
// Function ID: 1563
// Dependencies: []
// Exports: isArrayEqual

// Module 1562

export function isArrayEqual(arr, arg1) {
  const f81443 = (item, index) => Object.is(item, closure_0[index]);
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f81443);
    arr.length === arg1.length && arr.every(f81443);
  }
  return tmp;
}
