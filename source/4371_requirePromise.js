// Module ID: 4371
// Function ID: 38788
// Name: requirePromise
// Dependencies: []

// Module 4371 (requirePromise)

export default function requirePromise() {
  if ("function" !== typeof Promise) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
