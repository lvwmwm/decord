// Module ID: 16023
// Function ID: 16024
// Dependencies: []
// Exports: shouldPolyfill

// Module 16023

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
