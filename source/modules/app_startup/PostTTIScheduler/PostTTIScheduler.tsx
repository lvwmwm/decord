// Module ID: 6909
// Function ID: 55068
// Name: promise
// Dependencies: [2]
// Exports: notifyAboutTTI, schedulePostTTIEvent

// Module 6909 (promise)
let closure_0 = {
  resolve() {

  }
};
const promise = new Promise((resolve) => {
  closure_0.resolve = resolve;
});
const result = require("set").fileFinishedImporting("modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx");

export const schedulePostTTIEvent = function schedulePostTTIEvent(arg0) {
  let closure_0 = arg0;
  promise.then(() => {
    callback();
  });
};
export const notifyAboutTTI = function notifyAboutTTI() {
  closure_0.resolve(null);
};
