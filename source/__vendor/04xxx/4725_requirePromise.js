// Module ID: 4725
// Function ID: 4726
// Name: requirePromise
// Dependencies: []

// Module 4725 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
