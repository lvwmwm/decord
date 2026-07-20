// Module ID: 4363
// Function ID: 38692
// Name: requirePromise
// Dependencies: []

// Module 4363 (requirePromise)

export default function requirePromise() {
  if ("function" !== typeof Promise) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
