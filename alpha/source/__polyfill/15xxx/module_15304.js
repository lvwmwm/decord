// Module ID: 15304
// Function ID: 15305
// Dependencies: []
// Exports: shouldPolyfill

// Module 15304

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
