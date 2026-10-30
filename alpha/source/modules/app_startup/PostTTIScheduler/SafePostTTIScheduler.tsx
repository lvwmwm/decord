// Module ID: 7801
// Function ID: 7802
// Name: SafePostTTIScheduler
// Dependencies: [7802, 2]
// Exports: waitSafelyForPostTTI

// Module 7801 (SafePostTTIScheduler)
import PostTTIScheduler from "PostTTIScheduler" /* 7802 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx");

export function waitSafelyForPostTTI(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 4000;
  }
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    const timeout = setTimeout(() => {
      closure_0();
    }, num);
    const obj = PostTTIScheduler;
    obj.schedulePostTTIEvent(() => {
      clearTimeout(closure_1);
      closure_0();
    });
  });
  return promise;
}
