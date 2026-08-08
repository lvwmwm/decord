// Module ID: 4543
// Function ID: 4544
// Name: requirePromise
// Dependencies: []

// Module 4543 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
