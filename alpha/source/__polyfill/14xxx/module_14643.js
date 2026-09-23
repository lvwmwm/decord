// Module ID: 14643
// Function ID: 14644
// Dependencies: []
// Exports: shouldPolyfill

// Module 14643

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
