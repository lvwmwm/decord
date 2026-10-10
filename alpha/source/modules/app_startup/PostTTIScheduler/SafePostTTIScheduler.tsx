// Module ID: 7354
// Function ID: 7355
// Name: SafePostTTIScheduler
// Dependencies: [7355, 2]
// Exports: waitSafelyForPostTTI

// Module 7354 (SafePostTTIScheduler)
import PostTTIScheduler from "PostTTIScheduler" /* 7355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx");

export const waitSafelyForPostTTI = function waitSafelyForPostTTI(arg0) {
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
};
