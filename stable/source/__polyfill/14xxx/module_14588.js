// Module ID: 14588
// Function ID: 14589
// Dependencies: []
// Exports: shouldPolyfill

// Module 14588

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
