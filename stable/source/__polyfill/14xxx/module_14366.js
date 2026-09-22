// Module ID: 14366
// Function ID: 14367
// Dependencies: []
// Exports: shouldPolyfill

// Module 14366

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
