// Module ID: 5031
// Function ID: 5032
// Name: requirePromise
// Dependencies: []

// Module 5031 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
