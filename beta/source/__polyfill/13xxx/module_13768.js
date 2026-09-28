// Module ID: 13768
// Function ID: 13769
// Dependencies: []
// Exports: shouldPolyfill

// Module 13768

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
