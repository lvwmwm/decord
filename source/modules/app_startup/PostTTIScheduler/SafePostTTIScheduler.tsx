// Module ID: 6904
// Function ID: 55010
// Name: waitSafelyForPostTTI
// Dependencies: []
// Exports: waitSafelyForPostTTI

// Module 6904 (waitSafelyForPostTTI)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx");

export const waitSafelyForPostTTI = function waitSafelyForPostTTI(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 4000;
  }
  const require = num;
  return new Promise((arg0) => {
    const timeout = setTimeout(() => {
      arg0();
    }, num);
    arg0(timeout[0]).schedulePostTTIEvent(() => {
      clearTimeout(closure_1);
      arg0();
    });
  });
};
