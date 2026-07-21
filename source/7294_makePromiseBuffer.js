// Module ID: 7294
// Function ID: 58841
// Name: makePromiseBuffer
// Dependencies: []

// Module 7294 (makePromiseBuffer)
arg5.makePromiseBuffer = function makePromiseBuffer(arg0) {
  const arg1 = arg0;
  function remove(arg0) {
    let first = items.splice(items.indexOf(arg0), 1)[0];
    if (!first) {
      first = Promise.resolve(undefined);
    }
    return first;
  }
  const items = [];
  const arg6 = items;
  return {
    $: items,
    add(arg0) {
      let tmp = undefined === arg0;
      if (!tmp) {
        tmp = items.length < arg0;
      }
      if (tmp) {
        const promise = arg0();
        arg0 = promise;
        if (-1 === items.indexOf(promise)) {
          items.push(promise);
        }
        promise.then(() => callback(promise)).then(null, () => {
          const promise = callback(promise);
          return promise.then(null, () => {

          });
        });
        return promise;
      } else {
        const SentryError = arg0(items[1]).SentryError;
        const prototype = SentryError.prototype;
        const sentryError = new SentryError("Not adding Promise because buffer limit was reached.");
        return arg0(items[0]).rejectedSyncPromise(sentryError);
      }
    },
    drain(arg0) {
      return new arg0(items[0]).SyncPromise((arg0, arg1) => {
        const length = arg1.length;
        if (length) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            let tmp = arg0;
            if (arg0) {
              tmp = arg0 > 0;
            }
            if (tmp) {
              arg0(false);
            }
          }, arg0);
          const item = arg1.forEach((arg0) => {
            const obj = arg0(arg1[0]);
            arg0(arg1[0]).resolvedSyncPromise(arg0).then(() => {
              const diff = diff - 1;
              if (!diff) {
                const _clearTimeout = clearTimeout;
                clearTimeout(closure_3);
                callback(true);
              }
            }, arg1);
          });
        } else {
          return arg0(true);
        }
      });
    }
  };
};
