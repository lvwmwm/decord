// Module ID: 7068
// Function ID: 7069
// Name: promise
// Dependencies: [2]
// Exports: notifyAboutTTI, schedulePostTTIEvent

// Module 7068 (promise)
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
