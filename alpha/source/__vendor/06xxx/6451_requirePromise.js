// Module ID: 6451
// Function ID: 6452
// Name: requirePromise
// Dependencies: []

// Module 6451 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
