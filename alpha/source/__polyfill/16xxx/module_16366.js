// Module ID: 16366
// Function ID: 16367
// Dependencies: []
// Exports: shouldPolyfill

// Module 16366

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
