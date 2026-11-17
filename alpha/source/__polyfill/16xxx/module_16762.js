// Module ID: 16762
// Function ID: 16763
// Dependencies: []
// Exports: shouldPolyfill

// Module 16762

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
