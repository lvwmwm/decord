// Module ID: 15520
// Function ID: 15521
// Dependencies: []
// Exports: shouldPolyfill

// Module 15520

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
