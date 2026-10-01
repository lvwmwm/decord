// Module ID: 7079
// Function ID: 7080
// Name: SafePostTTIScheduler
// Dependencies: [7080, 2]
// Exports: waitSafelyForPostTTI

// Module 7079 (SafePostTTIScheduler)
import PostTTIScheduler from "PostTTIScheduler" /* 7080 */;
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
