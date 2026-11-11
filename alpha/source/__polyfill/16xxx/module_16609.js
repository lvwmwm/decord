// Module ID: 16609
// Function ID: 16610
// Dependencies: []
// Exports: shouldPolyfill

// Module 16609

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
