// Module ID: 13964
// Function ID: 13965
// Dependencies: []
// Exports: shouldPolyfill

// Module 13964

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
