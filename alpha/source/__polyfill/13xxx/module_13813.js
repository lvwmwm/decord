// Module ID: 13813
// Function ID: 13814
// Dependencies: []
// Exports: shouldPolyfill

// Module 13813

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
