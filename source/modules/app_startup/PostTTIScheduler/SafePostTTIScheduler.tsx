// Module ID: 7067
// Function ID: 7068
// Name: waitSafelyForPostTTI
// Dependencies: [7068, 2]
// Exports: waitSafelyForPostTTI

// Module 7067 (waitSafelyForPostTTI)
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
