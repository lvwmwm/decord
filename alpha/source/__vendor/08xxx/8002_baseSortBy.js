// Module ID: 8002
// Function ID: 8003
// Name: baseSortBy
// Dependencies: []

// Module 8002 (baseSortBy)

export default function baseSortBy(arr, arg1) {
  let tmp4;
  const sorted = arr.sort(arg1);
  let diff = tmp2 - 1;
  if (+arr.length) {
    do {
      arr[diff] = arr[diff].value;
      tmp4 = +diff;
      diff = tmp4 - 1;
    } while (tmp4);
  }
  return arr;
};
