// Module ID: 7075
// Function ID: 7076
// Dependencies: []
// Exports: findLastIndex

// Module 7075

export const findLastIndex = function findLastIndex(arg0, fn) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    while (!fn(arg0[diff])) {
      diff = diff - 1;
    }
    return diff;
  }
  return -1;
};
