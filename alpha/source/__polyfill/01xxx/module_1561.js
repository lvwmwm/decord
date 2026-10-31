// Module ID: 1561
// Function ID: 1562
// Dependencies: []
// Exports: isArrayEqual

// Module 1561

export function isArrayEqual(arr, arg1) {
  const f81653 = (item, index) => Object.is(item, closure_0[index]);
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f81653);
    arr.length === arg1.length && arr.every(f81653);
  }
  return tmp;
}
