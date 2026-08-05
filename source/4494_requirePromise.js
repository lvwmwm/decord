// Module ID: 4494
// Function ID: 4495
// Name: requirePromise
// Dependencies: []

// Module 4494 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
