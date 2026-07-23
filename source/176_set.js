// Module ID: 176
// Function ID: 2579
// Name: set
// Dependencies: []

// Module 176 (set)
const global = arg0;
let c1 = 1;
const set = new Set();
arg5.setImmediate = function setImmediate(flushQueue) {
  const _global = flushQueue;
  const length = arguments.length;
  let num = 0;
  if (length > 1) {
    num = length - 1;
  }
  const array = new Array(num);
  let closure_1 = array;
  for (let num2 = 1; num2 < length; num2 = num2 + 1) {
    array[num2 - 1] = arguments[num2];
  }
  if (arguments.length < 1) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("setImmediate must be called with at least one argument (a function to call)");
    throw typeError;
  } else if ("function" !== typeof flushQueue) {
    const _TypeError = TypeError;
    const typeError1 = new TypeError("The first argument to setImmediate must be a function.");
    throw typeError1;
  } else {
    closure_1 = tmp3 + 1;
    if (+closure_1.has(+closure_1)) {
      set.delete(tmp3);
    }
    _global.queueMicrotask(() => {
      if (tmp3.has(tmp3)) {
        tmp3.delete(tmp3);
      } else {
        callback.apply(undefined, closure_1);
      }
    });
    return +closure_1;
  }
};
arg5.clearImmediate = function clearImmediate(_updateImmediate) {
  set.add(_updateImmediate);
};
