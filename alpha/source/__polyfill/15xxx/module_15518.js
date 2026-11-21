// Module ID: 15518
// Function ID: 15519
// Dependencies: []
// Exports: shouldPolyfill

// Module 15518

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
