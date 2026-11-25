// Module ID: 15661
// Function ID: 15662
// Dependencies: []
// Exports: shouldPolyfill

// Module 15661

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
