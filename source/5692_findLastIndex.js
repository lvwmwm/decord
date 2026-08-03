// Module ID: 5692
// Function ID: 5693
// Name: findLastIndex
// Dependencies: []

// Module 5692 (findLastIndex)
arg5.default = function findLastIndex(arg0, arg1) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    while (!arg1(arg0[diff])) {
      diff = diff - 1;
    }
    return diff;
  }
  return -1;
};
