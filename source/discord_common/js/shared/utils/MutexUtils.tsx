// Module ID: 13352
// Function ID: 101575
// Name: createLock
// Dependencies: []
// Exports: createLock, createObservableLock

// Module 13352 (createLock)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/utils/MutexUtils.tsx");

export const createLock = function createLock() {
  let closure_0 = Promise.resolve(null);
  return (arg0) => {
    let closure_0 = arg0;
    return new Promise((arg0, arg1) => {
      const promise = promise.then(promise).then(arg0, arg1);
    });
  };
};
export const createObservableLock = function createObservableLock(arg0) {
  let closure_0 = Promise.resolve(null);
  let closure_1 = [];
  let closure_2 = false;
  ({ onContention: closure_3, onContentionResolved: closure_4, onTimeout: closure_5, timeoutMs: closure_6 } = arg0);
  function mutex(arg0, arg1) {
    let closure_0 = arg0;
    let arr = arg1;
    if (arr.length > 0) {
      callback(arg1, arr);
      let closure_2 = true;
    } else if (closure_2) {
      callback2();
      closure_2 = false;
    }
    arr = arr.push(arg1);
    let timerId = null;
    if (null != closure_6) {
      timerId = null;
      if (null != closure_5) {
        const _setTimeout = setTimeout;
        timerId = setTimeout(() => callback(arg1, arg1), closure_6);
      }
    }
    closure_2 = timerId;
    return new Promise((arg0, arg1) => {
      const nextPromise = promise.then(promise);
      let promise = promise.then(promise).then(arg0, arg1).then(() => arr.splice(0, 1));
      if (null != timerId) {
        promise = promise.then(() => clearTimeout(closure_2));
      }
    });
  }
  mutex.isMutexHeld = () => arr.length > 0;
  mutex.getLockHolders = () => closure_1;
  return mutex;
};
