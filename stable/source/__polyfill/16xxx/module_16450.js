// Module ID: 16450
// Function ID: 16451
// Dependencies: []
// Exports: shouldPolyfill

// Module 16450

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
