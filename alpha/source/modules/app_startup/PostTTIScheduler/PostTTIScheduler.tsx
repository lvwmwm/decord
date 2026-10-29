// Module ID: 7797
// Function ID: 7798
// Name: PostTTIScheduler
// Dependencies: [2]
// Exports: notifyAboutTTI, schedulePostTTIEvent

// Module 7797 (PostTTIScheduler)
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
