// Module ID: 5278
// Function ID: 5279
// Name: requirePromise
// Dependencies: []

// Module 5278 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
