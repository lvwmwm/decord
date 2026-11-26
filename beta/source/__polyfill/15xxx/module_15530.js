// Module ID: 15530
// Function ID: 15531
// Dependencies: []
// Exports: shouldPolyfill

// Module 15530

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
