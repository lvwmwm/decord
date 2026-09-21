// Module ID: 7902
// Function ID: 7903
// Name: SafePostTTIScheduler
// Dependencies: [7903, 2]
// Exports: waitSafelyForPostTTI

// Module 7902 (SafePostTTIScheduler)
import PostTTIScheduler from "PostTTIScheduler" /* 7903 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx");

export const waitSafelyForPostTTI = function waitSafelyForPostTTI(arg0) {
  return new Promise((arg0) => {
    closure_0 = arg0;
    const timeout = setTimeout(() => {
      closure_0();
    }, num);
    PostTTIScheduler.schedulePostTTIEvent(() => {
      clearTimeout(closure_1);
      closure_0();
    });
  });
};
