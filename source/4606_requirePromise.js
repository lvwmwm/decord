// Module ID: 4606
// Function ID: 4607
// Name: requirePromise
// Dependencies: []

// Module 4606 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
