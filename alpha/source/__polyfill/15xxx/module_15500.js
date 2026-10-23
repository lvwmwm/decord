// Module ID: 15500
// Function ID: 15501
// Dependencies: []
// Exports: shouldPolyfill

// Module 15500

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
