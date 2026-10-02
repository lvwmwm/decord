// Module ID: 13770
// Function ID: 13771
// Dependencies: []
// Exports: shouldPolyfill

// Module 13770

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
