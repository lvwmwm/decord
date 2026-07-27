// Module ID: 4372
// Function ID: 38801
// Name: requirePromise
// Dependencies: []

// Module 4372 (requirePromise)

export default function requirePromise() {
  if ("function" !== typeof Promise) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
