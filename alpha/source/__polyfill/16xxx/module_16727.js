// Module ID: 16727
// Function ID: 16728
// Dependencies: []
// Exports: shouldPolyfill

// Module 16727

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
