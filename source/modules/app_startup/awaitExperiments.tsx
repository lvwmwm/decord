// Module ID: 12991
// Function ID: 98865
// Name: future
// Dependencies: [0, 0]
// Exports: beginLoadedExperimentsTimeout, getPromise, onExperimentsLoaded

// Module 12991 (future)
import result from "result";

const future = new require("result").Future();
let closure_1 = null;
result = result.fileFinishedImporting("modules/app_startup/awaitExperiments.tsx");

export const beginLoadedExperimentsTimeout = function beginLoadedExperimentsTimeout() {
  const timeout = setTimeout(() => {
    closure_0.resolve();
    let closure_1 = null;
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
