// Module ID: 5033
// Function ID: 5034
// Name: requirePromise
// Dependencies: []

// Module 5033 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
