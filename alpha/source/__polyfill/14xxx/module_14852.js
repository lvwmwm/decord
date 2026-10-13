// Module ID: 14852
// Function ID: 14853
// Dependencies: []
// Exports: shouldPolyfill

// Module 14852

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
