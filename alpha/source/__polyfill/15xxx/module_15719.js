// Module ID: 15719
// Function ID: 15720
// Dependencies: []
// Exports: shouldPolyfill

// Module 15719

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
