// Module ID: 16340
// Function ID: 16341
// Dependencies: []
// Exports: shouldPolyfill

// Module 16340

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
