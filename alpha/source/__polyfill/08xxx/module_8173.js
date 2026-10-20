// Module ID: 8173
// Function ID: 8174
// Dependencies: []
// Exports: get64BitValue

// Module 8173

export const get64BitValue = function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
};
