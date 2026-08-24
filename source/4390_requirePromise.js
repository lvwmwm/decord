// Module ID: 4390
// Function ID: 4391
// Name: requirePromise
// Dependencies: []

// Module 4390 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
