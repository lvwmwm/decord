// Module ID: 4757
// Function ID: 4758
// Name: requirePromise
// Dependencies: []

// Module 4757 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
