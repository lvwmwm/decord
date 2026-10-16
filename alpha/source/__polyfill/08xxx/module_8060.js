// Module ID: 8060
// Function ID: 8061
// Dependencies: []
// Exports: get64BitValue

// Module 8060

export const get64BitValue = function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
};
