// Module ID: 16448
// Function ID: 16449
// Dependencies: []
// Exports: shouldPolyfill

// Module 16448

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
