// Module ID: 9633
// Function ID: 9634
// Name: baseDelay
// Dependencies: []

// Module 9633 (baseDelay)

export default function baseDelay(fn) {
  let closure_0 = fn;
  let closure_1 = arg2;
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    const _setTimeout = setTimeout;
    return setTimeout(() => {
      callback.apply(undefined, closure_1);
    }, arg1);
  }
};
