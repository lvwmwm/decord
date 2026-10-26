// Module ID: 15525
// Function ID: 15526
// Dependencies: []
// Exports: shouldPolyfill

// Module 15525

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
