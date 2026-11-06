// Module ID: 16363
// Function ID: 16364
// Dependencies: []
// Exports: shouldPolyfill

// Module 16363

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
