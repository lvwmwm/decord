// Module ID: 15516
// Function ID: 15517
// Dependencies: []
// Exports: shouldPolyfill

// Module 15516

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
