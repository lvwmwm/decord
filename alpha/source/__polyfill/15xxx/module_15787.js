// Module ID: 15787
// Function ID: 15788
// Dependencies: []
// Exports: shouldPolyfill

// Module 15787

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
