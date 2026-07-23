// Module ID: 7300
// Function ID: 58898
// Name: makePromiseBuffer
// Dependencies: [7260, 7293]

// Module 7300 (makePromiseBuffer)
const require = arg1;
const dependencyMap = arg6;
arg5.makePromiseBuffer = function makePromiseBuffer(arg0) {
  let closure_0 = arg0;
  function remove(arg0) {
    let first = items.splice(items.indexOf(arg0), 1)[0];
    if (!first) {
      first = Promise.resolve(undefined);
    }
    return first;
  }
  const items = [];
  return {
    $: items,
    add(arg0) {
      let tmp = undefined === promise;
      if (!tmp) {
        tmp = items.length < promise;
      }
      if (tmp) {
        promise = arg0();
        if (-1 === items.indexOf(promise)) {
          items.push(promise);
        }
        promise.then(() => outer1_2(promise)).then(null, () => {
          promise = outer1_2(promise);
          return promise.then(null, () => {

          });
        });
        return promise;
      } else {
        const SentryError = callback(items[1]).SentryError;
        const prototype = SentryError.prototype;
        const sentryError = new SentryError("Not adding Promise because buffer limit was reached.");
        return callback(items[0]).rejectedSyncPromise(sentryError);
      }
    },
    drain(arg0) {
      const callback = arg0;
      return new callback(items[0]).SyncPromise((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        const length = outer1_1.length;
        if (length) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            let tmp = callback;
            if (callback) {
              tmp = callback > 0;
            }
            if (tmp) {
              callback(false);
            }
          }, closure_0);
          const item = outer1_1.forEach((arg0) => {
            const obj = callback(items[0]);
            callback(items[0]).resolvedSyncPromise(arg0).then(() => {
              const diff = outer1_2 - 1;
              outer1_2 = diff;
              if (!diff) {
                const _clearTimeout = clearTimeout;
                clearTimeout(outer1_3);
                outer1_0(true);
              }
            }, closure_1);
          });
        } else {
          return arg0(true);
        }
      });
    }
  };
};
