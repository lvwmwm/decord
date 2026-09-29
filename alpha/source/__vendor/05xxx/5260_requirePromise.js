// Module ID: 5260
// Function ID: 5261
// Name: requirePromise
// Dependencies: []

// Module 5260 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
