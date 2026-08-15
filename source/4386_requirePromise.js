// Module ID: 4386
// Function ID: 4387
// Name: requirePromise
// Dependencies: []

// Module 4386 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
