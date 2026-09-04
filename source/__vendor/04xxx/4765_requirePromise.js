// Module ID: 4765
// Function ID: 4766
// Name: requirePromise
// Dependencies: []

// Module 4765 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
