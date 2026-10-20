// Module ID: 15332
// Function ID: 15333
// Dependencies: []
// Exports: shouldPolyfill

// Module 15332

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
