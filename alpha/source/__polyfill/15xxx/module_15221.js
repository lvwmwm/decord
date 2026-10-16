// Module ID: 15221
// Function ID: 15222
// Dependencies: []
// Exports: shouldPolyfill

// Module 15221

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
