// Module ID: 1563
// Function ID: 1564
// Dependencies: []
// Exports: isArrayEqual

// Module 1563

export function isArrayEqual(arr, arg1) {
  const f83849 = (item, index) => Object.is(item, closure_0[index]);
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f83849);
    arr.length === arg1.length && arr.every(f83849);
  }
  return tmp;
}
