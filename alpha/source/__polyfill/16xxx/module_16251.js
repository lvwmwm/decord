// Module ID: 16251
// Function ID: 16252
// Dependencies: []
// Exports: shouldPolyfill

// Module 16251

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
