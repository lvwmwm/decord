// Module ID: 7365
// Function ID: 7366
// Dependencies: []
// Exports: findLastIndex

// Module 7365

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
