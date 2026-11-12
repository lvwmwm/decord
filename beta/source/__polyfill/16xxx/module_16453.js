// Module ID: 16453
// Function ID: 16454
// Dependencies: []
// Exports: shouldPolyfill

// Module 16453

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
