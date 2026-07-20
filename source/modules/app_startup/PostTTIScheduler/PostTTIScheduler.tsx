// Module ID: 6900
// Function ID: 54993
// Name: promise
// Dependencies: []
// Exports: notifyAboutTTI, schedulePostTTIEvent

// Module 6900 (promise)
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
