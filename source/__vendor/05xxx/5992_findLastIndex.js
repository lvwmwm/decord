// Module ID: 5992
// Function ID: 5993
// Name: findLastIndex
// Dependencies: []

// Module 5992 (findLastIndex)
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
