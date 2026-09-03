// Module ID: 4758
// Function ID: 4759
// Name: requirePromise
// Dependencies: []

// Module 4758 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
