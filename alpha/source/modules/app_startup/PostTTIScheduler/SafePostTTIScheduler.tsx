// Module ID: 7074
// Function ID: 7075
// Name: SafePostTTIScheduler
// Dependencies: [7075, 2]
// Exports: waitSafelyForPostTTI

// Module 7074 (SafePostTTIScheduler)
import PostTTIScheduler from "PostTTIScheduler" /* 7075 */;
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
