// Module ID: 15524
// Function ID: 15525
// Dependencies: []
// Exports: shouldPolyfill

// Module 15524

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
