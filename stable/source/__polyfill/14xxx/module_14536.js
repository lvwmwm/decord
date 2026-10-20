// Module ID: 14536
// Function ID: 14537
// Dependencies: []
// Exports: shouldPolyfill

// Module 14536

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
