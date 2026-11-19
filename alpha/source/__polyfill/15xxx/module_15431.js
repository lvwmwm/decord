// Module ID: 15431
// Function ID: 15432
// Dependencies: []
// Exports: shouldPolyfill

// Module 15431

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
