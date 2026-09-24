// Module ID: 5086
// Function ID: 5087
// Name: requirePromise
// Dependencies: []

// Module 5086 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
