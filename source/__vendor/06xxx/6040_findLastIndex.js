// Module ID: 6040
// Function ID: 6041
// Name: findLastIndex
// Dependencies: []

// Module 6040 (findLastIndex)
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
