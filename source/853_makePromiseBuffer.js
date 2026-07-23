// Module ID: 853
// Function ID: 9580
// Name: makePromiseBuffer
// Dependencies: [849]

// Module 853 (makePromiseBuffer)
const require = arg1;
const dependencyMap = arg6;
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
  const set = new Set();
  const obj = {};
  Object.defineProperty(obj, "$", { get: () => Array.from(set), set: undefined });
  obj.add = function add(arg0) {
    if (set.size < promise) {
      promise = arg0();
      set.add(promise);
      promise.then(() => {
        outer1_2(promise);
      }, () => {
        outer1_2(promise);
      });
      return promise;
    } else {
      return 0(set[0]).rejectedSyncPromise(remove);
    }
  };
  obj.drain = function drain(arg0) {
    let closure_0 = arg0;
    if (set.size) {
      const _Array = Array;
      const nextPromise = Promise.allSettled(Array.from(set)).then(() => true);
      if (arg0) {
        const items = [nextPromise, ];
        const promise = new Promise((arg0) => {
          let closure_0 = arg0;
          return setTimeout(() => callback(false), closure_0);
        });
        items[1] = promise;
        return Promise.race(items);
      } else {
        return nextPromise;
      }
      const allSettledResult = Promise.allSettled(Array.from(set));
    } else {
      return 0(set[0]).resolvedSyncPromise(true);
    }
  };
  return obj;
};
