// Module ID: 7903
// Function ID: 7904
// Name: PostTTIScheduler
// Dependencies: [2]
// Exports: notifyAboutTTI, schedulePostTTIEvent

// Module 7903 (PostTTIScheduler)
import size from "module_2" /* 2 */;

const obj = {
  resolve() {

  }
};
const promise = new Promise((resolve) => {
  obj.resolve = resolve;
});
const result = size.fileFinishedImporting("modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx");

export const schedulePostTTIEvent = function schedulePostTTIEvent(arg0) {
  closure_0 = arg0;
  promise.then(() => {
    closure_0();
  });
};
export const notifyAboutTTI = function notifyAboutTTI() {
  obj.resolve(null);
};
