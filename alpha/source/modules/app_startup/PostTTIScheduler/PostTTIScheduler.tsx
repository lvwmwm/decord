// Module ID: 7075
// Function ID: 7076
// Name: PostTTIScheduler
// Dependencies: [2]
// Exports: notifyAboutTTI, schedulePostTTIEvent

// Module 7075 (PostTTIScheduler)
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
