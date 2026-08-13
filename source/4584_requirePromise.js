// Module ID: 4584
// Function ID: 4585
// Name: requirePromise
// Dependencies: []

// Module 4584 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
