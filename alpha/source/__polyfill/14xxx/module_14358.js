// Module ID: 14358
// Function ID: 14359
// Dependencies: []
// Exports: shouldPolyfill

// Module 14358

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
