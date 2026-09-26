// Module ID: 7934
// Function ID: 7935
// Name: SafePostTTIScheduler
// Dependencies: [7935, 2]
// Exports: waitSafelyForPostTTI

// Module 7934 (SafePostTTIScheduler)
import PostTTIScheduler from "PostTTIScheduler" /* 7935 */;
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
