// Module ID: 4710
// Function ID: 4711
// Name: requirePromise
// Dependencies: []

// Module 4710 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
