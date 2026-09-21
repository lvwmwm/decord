// Module ID: 14557
// Function ID: 14558
// Dependencies: []
// Exports: shouldPolyfill

// Module 14557

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
