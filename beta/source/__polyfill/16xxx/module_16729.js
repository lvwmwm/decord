// Module ID: 16729
// Function ID: 16730
// Dependencies: []
// Exports: shouldPolyfill

// Module 16729

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
