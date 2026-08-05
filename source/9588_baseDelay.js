// Module ID: 9588
// Function ID: 9589
// Name: baseDelay
// Dependencies: []

// Module 9588 (baseDelay)

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
