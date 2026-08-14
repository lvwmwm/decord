// Module ID: 5876
// Function ID: 5877
// Name: findLastIndex
// Dependencies: []

// Module 5876 (findLastIndex)
arg5.findLastIndex = function findLastIndex(arg0, arg1) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    while (!arg1(arg0[diff])) {
      diff = diff - 1;
    }
    return diff;
  }
  return -1;
};
