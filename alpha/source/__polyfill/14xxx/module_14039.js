// Module ID: 14039
// Function ID: 14040
// Dependencies: []
// Exports: shouldPolyfill

// Module 14039

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
