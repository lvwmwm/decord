// Module ID: 4880
// Function ID: 4881
// Name: requirePromise
// Dependencies: []

// Module 4880 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
