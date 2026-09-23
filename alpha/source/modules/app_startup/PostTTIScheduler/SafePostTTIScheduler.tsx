// Module ID: 7987
// Function ID: 7988
// Name: SafePostTTIScheduler
// Dependencies: [7988, 2]
// Exports: waitSafelyForPostTTI

// Module 7987 (SafePostTTIScheduler)
import PostTTIScheduler from "PostTTIScheduler" /* 7988 */;
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
