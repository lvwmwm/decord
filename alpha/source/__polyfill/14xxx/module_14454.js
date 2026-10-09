// Module ID: 14454
// Function ID: 14455
// Dependencies: []
// Exports: shouldPolyfill

// Module 14454

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
