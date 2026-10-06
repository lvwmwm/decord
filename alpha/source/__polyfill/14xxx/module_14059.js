// Module ID: 14059
// Function ID: 14060
// Dependencies: []
// Exports: shouldPolyfill

// Module 14059

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
