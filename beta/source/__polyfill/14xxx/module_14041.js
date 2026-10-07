// Module ID: 14041
// Function ID: 14042
// Dependencies: []
// Exports: shouldPolyfill

// Module 14041

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
