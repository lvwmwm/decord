// Module ID: 4541
// Function ID: 4542
// Name: requirePromise
// Dependencies: []

// Module 4541 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
