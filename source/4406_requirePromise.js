// Module ID: 4406
// Function ID: 38915
// Name: requirePromise
// Dependencies: []

// Module 4406 (requirePromise)

export default function requirePromise() {
  if ("function" !== typeof Promise) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
