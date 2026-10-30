// Module ID: 16063
// Function ID: 16064
// Dependencies: []
// Exports: shouldPolyfill

// Module 16063

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
