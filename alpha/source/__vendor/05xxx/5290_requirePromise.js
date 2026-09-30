// Module ID: 5290
// Function ID: 5291
// Name: requirePromise
// Dependencies: []

// Module 5290 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
