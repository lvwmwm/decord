// Module ID: 2
// Function ID: 103
// Name: result2
// Dependencies: []

// Module 2 (result2)
const set = new Set();
arg5.clear = function clear() {
  set.clear();
};
arg5.size = function size() {
  return set.size;
};
arg5.fileFinishedImporting = function fileFinishedImporting(arg0) {
  set.add(arg0);
};
