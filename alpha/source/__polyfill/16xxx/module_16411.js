// Module ID: 16411
// Function ID: 16412
// Dependencies: []
// Exports: shouldPolyfill

// Module 16411

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
