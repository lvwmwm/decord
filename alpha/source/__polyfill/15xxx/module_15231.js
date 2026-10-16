// Module ID: 15231
// Function ID: 15232
// Dependencies: []
// Exports: shouldPolyfill

// Module 15231

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
