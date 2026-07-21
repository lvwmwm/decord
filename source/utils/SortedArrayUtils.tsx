// Module ID: 4802
// Function ID: 41843
// Name: insertionIndex
// Dependencies: []
// Exports: insert

// Module 4802 (insertionIndex)
function insertionIndex(arr, arg1, arg2) {
  let tmp2;
  let length = arr.length;
  let num = 0;
  let num2 = 0;
  if (0 < length) {
    do {
      let tmp = num + length >>> 1;
      tmp2 = tmp;
      if (arg2(arr[tmp], arg1) < 0) {
        num = tmp + 1;
        tmp2 = length;
      }
      length = tmp2;
      num2 = num;
    } while (num < tmp2);
  }
  return num2;
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/SortedArrayUtils.tsx");

export { insertionIndex };
export const insert = function insert(arr) {
  arr.splice(insertionIndex(arr, arg1, arg2), 0, arg1);
};
