// Module ID: 5094
// Function ID: 5095
// Name: requirePromise
// Dependencies: []

// Module 5094 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
