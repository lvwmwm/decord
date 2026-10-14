// Module ID: 14890
// Function ID: 14891
// Dependencies: []
// Exports: shouldPolyfill

// Module 14890

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
