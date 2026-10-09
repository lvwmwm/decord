// Module ID: 8491
// Function ID: 8492
// Name: baseSortBy
// Dependencies: []

// Module 8491 (baseSortBy)

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
