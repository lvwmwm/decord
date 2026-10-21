// Module ID: 8201
// Function ID: 8202
// Dependencies: []
// Exports: get64BitValue

// Module 8201

export const get64BitValue = function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
};
