// Module ID: 4723
// Function ID: 4724
// Name: requirePromise
// Dependencies: []

// Module 4723 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
