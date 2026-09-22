// Module ID: 14563
// Function ID: 14564
// Dependencies: []
// Exports: shouldPolyfill

// Module 14563

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
