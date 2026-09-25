// Module ID: 5087
// Function ID: 5088
// Name: requirePromise
// Dependencies: []

// Module 5087 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
