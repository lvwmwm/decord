// Module ID: 7421
// Function ID: 7422
// Name: promise
// Dependencies: [2]
// Exports: notifyAboutTTI, schedulePostTTIEvent

// Module 7421 (promise)
import set from "set" /* 2 */;

const obj = {
  resolve() {

  }
};
const promise = new Promise((resolve) => {
  obj.resolve = resolve;
});
const result = set.fileFinishedImporting("modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx");

export const schedulePostTTIEvent = function schedulePostTTIEvent(arg0) {
  closure_0 = arg0;
  promise.then(() => {
    callback();
  });
};
export const notifyAboutTTI = function notifyAboutTTI() {
  obj.resolve(null);
};
