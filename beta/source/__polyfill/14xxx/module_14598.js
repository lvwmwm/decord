// Module ID: 14598
// Function ID: 14599
// Dependencies: []
// Exports: shouldPolyfill

// Module 14598

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
