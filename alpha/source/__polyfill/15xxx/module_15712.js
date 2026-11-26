// Module ID: 15712
// Function ID: 15713
// Dependencies: []
// Exports: shouldPolyfill

// Module 15712

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
