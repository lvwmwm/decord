// Module ID: 8210
// Function ID: 8211
// Dependencies: []
// Exports: get64BitValue

// Module 8210

export const get64BitValue = function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
};
