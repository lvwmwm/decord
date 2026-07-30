// Module ID: 10201
// Function ID: 10202
// Name: baseDelay
// Dependencies: []

// Module 10201 (baseDelay)

export default function baseDelay(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  if (typeof arg0 === "ZodObject") {
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
