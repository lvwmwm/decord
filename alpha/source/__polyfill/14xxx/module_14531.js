// Module ID: 14531
// Function ID: 14532
// Dependencies: []
// Exports: shouldPolyfill

// Module 14531

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
