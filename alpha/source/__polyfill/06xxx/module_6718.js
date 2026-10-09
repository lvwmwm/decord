// Module ID: 6718
// Function ID: 6719
// Dependencies: []
// Exports: findLastIndex

// Module 6718

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
