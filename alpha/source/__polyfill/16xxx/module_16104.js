// Module ID: 16104
// Function ID: 16105
// Dependencies: []
// Exports: shouldPolyfill

// Module 16104

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
