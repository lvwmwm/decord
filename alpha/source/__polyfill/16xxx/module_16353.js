// Module ID: 16353
// Function ID: 16354
// Dependencies: []
// Exports: shouldPolyfill

// Module 16353

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
