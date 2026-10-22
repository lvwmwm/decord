// Module ID: 15466
// Function ID: 15467
// Dependencies: []
// Exports: shouldPolyfill

// Module 15466

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
