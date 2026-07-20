// Module ID: 12982
// Function ID: 98820
// Name: future
// Dependencies: []
// Exports: beginLoadedExperimentsTimeout, getPromise, onExperimentsLoaded

// Module 12982 (future)
const future = new require(dependencyMap[0]).Future();
let closure_1 = null;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/app_startup/awaitExperiments.tsx");

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
