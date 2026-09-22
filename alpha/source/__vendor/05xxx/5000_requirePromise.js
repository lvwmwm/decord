// Module ID: 5000
// Function ID: 5001
// Name: requirePromise
// Dependencies: []

// Module 5000 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
