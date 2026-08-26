// Module ID: 4709
// Function ID: 4710
// Name: requirePromise
// Dependencies: []

// Module 4709 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
