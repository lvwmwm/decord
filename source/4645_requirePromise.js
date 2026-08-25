// Module ID: 4645
// Function ID: 4646
// Name: requirePromise
// Dependencies: []

// Module 4645 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
