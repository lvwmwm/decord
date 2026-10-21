// Module ID: 15422
// Function ID: 15423
// Dependencies: []
// Exports: shouldPolyfill

// Module 15422

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
