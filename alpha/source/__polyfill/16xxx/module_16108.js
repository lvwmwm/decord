// Module ID: 16108
// Function ID: 16109
// Dependencies: []
// Exports: shouldPolyfill

// Module 16108

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
