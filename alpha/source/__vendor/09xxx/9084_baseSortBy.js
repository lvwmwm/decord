// Module ID: 9084
// Function ID: 9085
// Name: baseSortBy
// Dependencies: []

// Module 9084 (baseSortBy)

export default function baseSortBy(arr, arg1) {
  let tmp4;
  const length = arr.length;
  const sorted = arr.sort(arg1);
  let diff = tmp2 - 1;
  if (+length) {
    do {
      arr[diff] = arr[diff].value;
      tmp4 = +diff;
      diff = tmp4 - 1;
    } while (tmp4);
  }
  return arr;
};
