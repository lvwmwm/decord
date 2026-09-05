// Module ID: 4804
// Function ID: 4805
// Name: requirePromise
// Dependencies: []

// Module 4804 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
