// Module ID: 5575
// Function ID: 47367
// Name: findLastIndex
// Dependencies: []

// Module 5575 (findLastIndex)
arg5.default = function findLastIndex(arg0, arg1) {
  let diff = arg0.length - 1;
  if (diff >= 0) {
    while (!arg1(arg0[diff])) {
      diff = diff - 1;
    }
    return diff;
  }
  return -1;
};
