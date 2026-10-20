// Module ID: 8169
// Function ID: 8170
// Dependencies: []
// Exports: get64BitValue

// Module 8169

export const get64BitValue = function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
};
