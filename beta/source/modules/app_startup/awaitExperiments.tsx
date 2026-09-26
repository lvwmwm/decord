// Module ID: 14502
// Function ID: 14503
// Name: awaitExperiments
// Dependencies: [9439, 2]
// Exports: beginLoadedExperimentsTimeout, getPromise, onExperimentsLoaded

// Module 14502 (awaitExperiments)
import Future from "Future" /* 9439 */;
import size from "module_2" /* 2 */;

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
