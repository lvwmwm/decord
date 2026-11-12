// Module ID: 16604
// Function ID: 16605
// Dependencies: []
// Exports: shouldPolyfill

// Module 16604

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
