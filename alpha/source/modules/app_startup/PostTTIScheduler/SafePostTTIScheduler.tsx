// Module ID: 7274
// Function ID: 7275
// Name: SafePostTTIScheduler
// Dependencies: [7275, 2]
// Exports: waitSafelyForPostTTI

// Module 7274 (SafePostTTIScheduler)
import PostTTIScheduler from "PostTTIScheduler" /* 7275 */;
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
