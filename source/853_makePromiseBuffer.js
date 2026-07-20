// Module ID: 853
// Function ID: 9575
// Name: makePromiseBuffer
// Dependencies: []

// Module 853 (makePromiseBuffer)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const forResult = Symbol.for("SentryBufferFullError");
arg5.SENTRY_BUFFER_FULL_ERROR = forResult;
arg5.makePromiseBuffer = function makePromiseBuffer() {
  function remove(arg0) {
    set.delete(arg0);
  }
  let num = 100;
  if (arguments.length > 0) {
    num = 100;
    if (undefined !== arguments[0]) {
      num = arguments[0];
    }
  }
  const arg1 = num;
  const arg6 = new Set();
  const obj = {};
  Object.defineProperty(obj, "$", { get: () => Array.from(set), set: undefined });
  obj.add = function add(arg0) {
    if (set.size < num) {
      const promise = arg0();
      let num = promise;
      set.add(promise);
      promise.then(() => {
        callback(promise);
      }, () => {
        callback(promise);
      });
      return promise;
    } else {
      num = 0;
      return num(set[0]).rejectedSyncPromise(remove);
    }
  };
  obj.drain = function drain(arg0) {
    let num = arg0;
    if (set.size) {
      const _Array = Array;
      const nextPromise = Promise.allSettled(Array.from(set)).then(() => true);
      if (arg0) {
        const items = [nextPromise, ];
        const promise = new Promise((arg0) => setTimeout(() => arg0(false), arg0));
        items[1] = promise;
        return Promise.race(items);
      } else {
        return nextPromise;
      }
      const allSettledResult = Promise.allSettled(Array.from(set));
    } else {
      num = 0;
      return num(set[0]).resolvedSyncPromise(true);
    }
  };
  return obj;
};
