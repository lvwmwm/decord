// Module ID: 8257
// Function ID: 8258
// Dependencies: []
// Exports: get64BitValue

// Module 8257

export const get64BitValue = function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
};
