// Module ID: 8381
// Function ID: 8382
// Dependencies: []
// Exports: get64BitValue

// Module 8381

export function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
}
