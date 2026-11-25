// Module ID: 8288
// Function ID: 8289
// Name: PostTTIScheduler
// Dependencies: [2]
// Exports: notifyAboutTTI, schedulePostTTIEvent

// Module 8288 (PostTTIScheduler)
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
