// Module ID: 12989
// Function ID: 98843
// Name: future
// Dependencies: [0, 0]
// Exports: beginLoadedExperimentsTimeout, getPromise, onExperimentsLoaded

// Module 12989 (future)
const future = new require("__exportStarResult1").Future();
let closure_1 = null;
const result = require("__exportStarResult1").fileFinishedImporting("modules/app_startup/awaitExperiments.tsx");

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
