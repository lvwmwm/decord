// Module ID: 1564
// Function ID: 1565
// Dependencies: []
// Exports: isArrayEqual

// Module 1564

export function isArrayEqual(arr, arg1) {
  const f81302 = (item, index) => Object.is(item, closure_0[index]);
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f81302);
    arr.length === arg1.length && arr.every(f81302);
  }
  return tmp;
}
