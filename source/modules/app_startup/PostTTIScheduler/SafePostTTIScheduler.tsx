// Module ID: 5950
// Function ID: 5951
// Name: waitSafelyForPostTTI
// Dependencies: [5951, 2]
// Exports: waitSafelyForPostTTI

// Module 5950 (waitSafelyForPostTTI)
const result = require("set").fileFinishedImporting("modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx");

export const waitSafelyForPostTTI = function waitSafelyForPostTTI(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 4000;
  }
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const timeout = setTimeout(() => {
      callback();
    }, closure_0);
    num(outer1_1[0]).schedulePostTTIEvent(() => {
      clearTimeout(closure_1);
      callback();
    });
  });
};
