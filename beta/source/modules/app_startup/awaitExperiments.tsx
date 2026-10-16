// Module ID: 14444
// Function ID: 14445
// Name: awaitExperiments
// Dependencies: [9246, 2]
// Exports: beginLoadedExperimentsTimeout, getPromise, onExperimentsLoaded

// Module 14444 (awaitExperiments)
import Future from "Future" /* 9246 */;
import size from "module_2" /* 2 */;

let c1;

const future = new Future.Future();
let closure_1 = null;
const result = size.fileFinishedImporting("modules/app_startup/awaitExperiments.tsx");

export const beginLoadedExperimentsTimeout = function beginLoadedExperimentsTimeout() {
  const timeout = setTimeout(() => {
    future.resolve();
    c1 = null;
  }, 1000);
};
export const onExperimentsLoaded = function onExperimentsLoaded() {
  if (null != closure_1) {
    future.resolve();
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_1);
  }
};
export const getPromise = function getPromise() {
  return future.promise;
};
