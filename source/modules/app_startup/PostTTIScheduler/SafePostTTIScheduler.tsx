// Module ID: 7344
// Function ID: 7345
// Name: waitSafelyForPostTTI
// Dependencies: [7345, 2]
// Exports: waitSafelyForPostTTI

// Module 7344 (waitSafelyForPostTTI)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx");

export const waitSafelyForPostTTI = function waitSafelyForPostTTI(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 4000;
  }
  return new Promise((arg0) => {
    closure_0 = arg0;
    const timeout = setTimeout(() => {
      callback();
    }, closure_0);
    num(closure_1_1[0]).schedulePostTTIEvent(() => {
      clearTimeout(closure_1);
      callback();
    });
  });
};
