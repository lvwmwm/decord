// Module ID: 6905
// Function ID: 55015
// Name: promise
// Dependencies: []
// Exports: notifyAboutTTI, schedulePostTTIEvent

// Module 6905 (promise)
let closure_0 = {
  resolve() {

  }
};
const promise = new Promise((resolve) => {
  closure_0.resolve = resolve;
});
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx");

export const schedulePostTTIEvent = function schedulePostTTIEvent(arg0) {
  let closure_0 = arg0;
  promise.then(() => {
    arg0();
  });
};
export const notifyAboutTTI = function notifyAboutTTI() {
  closure_0.resolve(null);
};
