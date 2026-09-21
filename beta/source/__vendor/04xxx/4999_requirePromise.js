// Module ID: 4999
// Function ID: 5000
// Name: requirePromise
// Dependencies: []

// Module 4999 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
