// Module ID: 14508
// Function ID: 14509
// Dependencies: []
// Exports: shouldPolyfill

// Module 14508

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
