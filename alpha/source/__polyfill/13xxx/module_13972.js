// Module ID: 13972
// Function ID: 13973
// Dependencies: []
// Exports: shouldPolyfill

// Module 13972

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
