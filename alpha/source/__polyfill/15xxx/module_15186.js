// Module ID: 15186
// Function ID: 15187
// Dependencies: []
// Exports: shouldPolyfill

// Module 15186

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
