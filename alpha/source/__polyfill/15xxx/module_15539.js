// Module ID: 15539
// Function ID: 15540
// Dependencies: []
// Exports: shouldPolyfill

// Module 15539

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
