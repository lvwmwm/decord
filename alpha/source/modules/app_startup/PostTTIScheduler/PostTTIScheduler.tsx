// Module ID: 8330
// Function ID: 8331
// Name: PostTTIScheduler
// Dependencies: [2]
// Exports: notifyAboutTTI, schedulePostTTIEvent

// Module 8330 (PostTTIScheduler)
import size from "module_2" /* 2 */;

const obj = {
  resolve() {

  }
};
const promise = new Promise((resolve) => {
  obj.resolve = resolve;
});
const result = size.fileFinishedImporting("modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx");

export function schedulePostTTIEvent(arg0) {
  let closure_0 = arg0;
  promise.then(() => {
    closure_0();
  });
}
export function notifyAboutTTI() {
  obj.resolve(null);
}
