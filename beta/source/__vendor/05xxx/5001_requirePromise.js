// Module ID: 5001
// Function ID: 5002
// Name: requirePromise
// Dependencies: []

// Module 5001 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
