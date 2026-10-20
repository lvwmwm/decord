// Module ID: 15350
// Function ID: 15351
// Dependencies: []
// Exports: shouldPolyfill

// Module 15350

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
