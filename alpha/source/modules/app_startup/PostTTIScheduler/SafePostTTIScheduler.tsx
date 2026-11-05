// Module ID: 7953
// Function ID: 7954
// Name: SafePostTTIScheduler
// Dependencies: [7954, 2]
// Exports: waitSafelyForPostTTI

// Module 7953 (SafePostTTIScheduler)
import PostTTIScheduler from "PostTTIScheduler" /* 7954 */;
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
