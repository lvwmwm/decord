// Module ID: 15559
// Function ID: 15560
// Dependencies: []
// Exports: shouldPolyfill

// Module 15559

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
