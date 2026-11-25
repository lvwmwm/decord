// Module ID: 15526
// Function ID: 15527
// Dependencies: []
// Exports: shouldPolyfill

// Module 15526

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
