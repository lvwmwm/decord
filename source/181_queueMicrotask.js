// Module ID: 181
// Function ID: 2620
// Name: queueMicrotask
// Dependencies: []

// Module 181 (queueMicrotask)
arg5.default = function queueMicrotask(flush) {
  if (arguments.length < 1) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("queueMicrotask must be called with at least one argument (a function to call)");
    throw typeError;
  } else if ("function" !== typeof flush) {
    const _TypeError = TypeError;
    const typeError1 = new TypeError("The argument to queueMicrotask must be a function.");
    throw typeError1;
  } else {
    let promise = resolved;
    if (!resolved) {
      const resolved = Promise.resolve();
      promise = resolved;
    }
    promise.then(flush).catch((arg0) => {
      const resolved = arg0;
      return setTimeout(() => {
        throw arg0;
      }, 0);
    });
  }
};
