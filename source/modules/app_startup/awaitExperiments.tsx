// Module ID: 13165
// Function ID: 101381
// Name: future
// Dependencies: [8010, 2]
// Exports: beginLoadedExperimentsTimeout, getPromise, onExperimentsLoaded

// Module 13165 (future)
const future = new require("Future").Future();
let c1 = null;
const result = require("set").fileFinishedImporting("modules/app_startup/awaitExperiments.tsx");

export const beginLoadedExperimentsTimeout = function beginLoadedExperimentsTimeout() {
  const timeout = setTimeout(() => {
    outer1_0.resolve();
    let closure_1 = null;
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
