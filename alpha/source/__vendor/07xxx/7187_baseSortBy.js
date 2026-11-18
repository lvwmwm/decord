// Module ID: 7187
// Function ID: 7188
// Name: baseSortBy
// Dependencies: []

// Module 7187 (baseSortBy)

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
