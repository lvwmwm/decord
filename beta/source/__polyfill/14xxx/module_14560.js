// Module ID: 14560
// Function ID: 14561
// Dependencies: []
// Exports: shouldPolyfill

// Module 14560

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
