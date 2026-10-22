// Module ID: 15479
// Function ID: 15480
// Dependencies: []
// Exports: shouldPolyfill

// Module 15479

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
