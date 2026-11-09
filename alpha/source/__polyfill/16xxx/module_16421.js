// Module ID: 16421
// Function ID: 16422
// Dependencies: []
// Exports: shouldPolyfill

// Module 16421

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
