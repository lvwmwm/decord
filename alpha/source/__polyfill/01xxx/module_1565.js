// Module ID: 1565
// Function ID: 1566
// Dependencies: []
// Exports: isArrayEqual

// Module 1565

export function isArrayEqual(arr, arg1) {
  const f82107 = (item, index) => Object.is(item, closure_0[index]);
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f82107);
    arr.length === arg1.length && arr.every(f82107);
  }
  return tmp;
}
