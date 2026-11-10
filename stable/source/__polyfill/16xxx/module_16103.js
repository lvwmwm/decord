// Module ID: 16103
// Function ID: 16104
// Dependencies: []
// Exports: shouldPolyfill

// Module 16103

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
