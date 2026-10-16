// Module ID: 7573
// Function ID: 7574
// Name: SafePostTTIScheduler
// Dependencies: [7574, 2]
// Exports: waitSafelyForPostTTI

// Module 7573 (SafePostTTIScheduler)
import PostTTIScheduler from "PostTTIScheduler" /* 7574 */;
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
