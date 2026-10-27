// Module ID: 15561
// Function ID: 15562
// Dependencies: []
// Exports: shouldPolyfill

// Module 15561

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
