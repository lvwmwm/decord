// Module ID: 10933
// Function ID: 10934
// Name: baseDelay
// Dependencies: []

// Module 10933 (baseDelay)

export default function baseDelay(fn, arg1, arg2) {
  let closure_0 = fn;
  let closure_1 = arg2;
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    const _setTimeout = setTimeout;
    return setTimeout(() => {
      fn.apply(undefined, closure_1);
    }, arg1);
  }
};
