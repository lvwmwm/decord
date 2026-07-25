// Module ID: 10144
// Function ID: 78479
// Name: baseDelay
// Dependencies: []

// Module 10144 (baseDelay)

export default function baseDelay(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  if ("function" !== typeof arg0) {
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
