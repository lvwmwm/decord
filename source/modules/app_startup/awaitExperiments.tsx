// Module ID: 13767
// Function ID: 13768
// Name: future
// Dependencies: [8095, 2]
// Exports: beginLoadedExperimentsTimeout, getPromise, onExperimentsLoaded

// Module 13767 (future)
import set from "set" /* 2 */;
import Future from "Future" /* 8095 */;

const future = new Future.Future();
let c1 = null;
const result = set.fileFinishedImporting("modules/app_startup/awaitExperiments.tsx");

export const beginLoadedExperimentsTimeout = function beginLoadedExperimentsTimeout() {
  const timeout = setTimeout(() => {
    closure_0.resolve();
    c1 = null;
  }, 1000);
};
export const onExperimentsLoaded = function onExperimentsLoaded() {
  if (null != c1) {
    future.resolve();
    const _clearTimeout = clearTimeout;
    clearTimeout(c1);
  }
};
export const getPromise = function getPromise() {
  return future.promise;
};
