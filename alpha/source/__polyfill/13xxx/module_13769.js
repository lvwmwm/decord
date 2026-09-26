// Module ID: 13769
// Function ID: 13770
// Dependencies: []
// Exports: shouldPolyfill

// Module 13769

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
