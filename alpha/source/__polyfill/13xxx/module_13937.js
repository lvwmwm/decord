// Module ID: 13937
// Function ID: 13938
// Dependencies: []
// Exports: shouldPolyfill

// Module 13937

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
