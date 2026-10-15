// Module ID: 8056
// Function ID: 8057
// Dependencies: []
// Exports: get64BitValue

// Module 8056

export const get64BitValue = function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
};
