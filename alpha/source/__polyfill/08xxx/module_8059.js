// Module ID: 8059
// Function ID: 8060
// Dependencies: []
// Exports: get64BitValue

// Module 8059

export const get64BitValue = function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
};
