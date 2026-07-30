// Module ID: 5951
// Function ID: 5952
// Name: promise
// Dependencies: [2]
// Exports: notifyAboutTTI, schedulePostTTIEvent

// Module 5951 (promise)
const obj = {
  resolve() {

  }
};
const promise = new Promise((resolve) => {
  obj.resolve = resolve;
});
const result = require("set").fileFinishedImporting("modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx");

export const schedulePostTTIEvent = function schedulePostTTIEvent(arg0) {
  let closure_0 = arg0;
  promise.then(() => {
    callback();
  });
};
export const notifyAboutTTI = function notifyAboutTTI() {
  obj.resolve(null);
};
