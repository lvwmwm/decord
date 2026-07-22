// Module ID: 4367
// Function ID: 38756
// Name: requirePromise
// Dependencies: []

// Module 4367 (requirePromise)

export default function requirePromise() {
  if ("function" !== typeof Promise) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
