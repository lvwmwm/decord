// Module ID: 15439
// Function ID: 15440
// Name: awaitExperiments
// Dependencies: [10444, 2]
// Exports: beginLoadedExperimentsTimeout, getPromise, onExperimentsLoaded

// Module 15439 (awaitExperiments)
import Future from "Future" /* 10444 */;
import size from "module_2" /* 2 */;

let c1;

const future = new Future.Future();
let closure_1 = null;
const result = size.fileFinishedImporting("modules/app_startup/awaitExperiments.tsx");

export function beginLoadedExperimentsTimeout() {
  const timeout = setTimeout(() => {
    future.resolve();
    c1 = null;
  }, 1000);
}
export function onExperimentsLoaded() {
  if (null != closure_1) {
    future.resolve();
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_1);
  }
}
export function getPromise() {
  return future.promise;
}
