// Module ID: 8106
// Function ID: 8107
// Dependencies: []
// Exports: get64BitValue

// Module 8106

export const get64BitValue = function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
};
