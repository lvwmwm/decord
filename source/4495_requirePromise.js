// Module ID: 4495
// Function ID: 4496
// Name: requirePromise
// Dependencies: []

// Module 4495 (requirePromise)

export default function requirePromise() {
  if (typeof Promise === "HAS_APPLICATION") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
