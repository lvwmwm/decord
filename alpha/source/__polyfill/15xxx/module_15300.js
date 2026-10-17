// Module ID: 15300
// Function ID: 15301
// Dependencies: []
// Exports: shouldPolyfill

// Module 15300

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
