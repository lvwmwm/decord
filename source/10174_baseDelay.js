// Module ID: 10174
// Function ID: 78618
// Name: baseDelay
// Dependencies: []

// Module 10174 (baseDelay)

export default function baseDelay(arg0, arg1, arg2) {
  if ("function" !== typeof arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    const _setTimeout = setTimeout;
    return setTimeout(() => {
      arg0.apply(undefined, arg2);
    }, arg1);
  }
};
