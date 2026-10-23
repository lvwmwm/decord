// Module ID: 8223
// Function ID: 8224
// Dependencies: []
// Exports: get64BitValue

// Module 8223

export const get64BitValue = function get64BitValue(getUint32, sum4) {
  return getUint32.getUint32(sum4 + 4);
};
