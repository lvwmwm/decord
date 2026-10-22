// Module ID: 8211
// Function ID: 8212
// Dependencies: []
// Exports: get64BitValue

// Module 8211

export const get64BitValue = function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
};
