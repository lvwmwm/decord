// Module ID: 16451
// Function ID: 16452
// Dependencies: []
// Exports: shouldPolyfill

// Module 16451

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
