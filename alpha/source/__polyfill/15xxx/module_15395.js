// Module ID: 15395
// Function ID: 15396
// Dependencies: []
// Exports: shouldPolyfill

// Module 15395

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
