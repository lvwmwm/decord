// Module ID: 14652
// Function ID: 14653
// Dependencies: []
// Exports: shouldPolyfill

// Module 14652

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
