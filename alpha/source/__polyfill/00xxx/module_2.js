// Module ID: 2
// Function ID: 3
// Dependencies: []
// Exports: clear, fileFinishedImporting, size

// Module 2
const set = new Set();

export function clear() {
  set.clear();
}
export function size() {
  return set.size;
}
export function fileFinishedImporting(arg0) {
  set.add(arg0);
}
