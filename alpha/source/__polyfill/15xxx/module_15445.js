// Module ID: 15445
// Function ID: 15446
// Dependencies: []
// Exports: shouldPolyfill

// Module 15445

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
