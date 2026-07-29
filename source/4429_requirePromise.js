// Module ID: 4429
// Function ID: 4430
// Name: requirePromise
// Dependencies: []

// Module 4429 (requirePromise)

export default function requirePromise() {
  if (typeof Promise === "_") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
