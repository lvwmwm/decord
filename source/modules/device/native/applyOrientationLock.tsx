// Module ID: 11232
// Function ID: 11233
// Name: applyOrientationLock
// Dependencies: [9794, 8944, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 11232 (applyOrientationLock)
let result = require("set").fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (importDefault(9794)()) {
    require(8944) /* handleOrientationChange */.lockOrientation(PORTRAIT, flag);
    const obj = require(8944) /* handleOrientationChange */;
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (importDefault(9794)()) {
    let obj = require(8944) /* handleOrientationChange */;
    obj = { unlockAfterRotatingToPreviousLock: null };
    obj[0] = unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock;
    obj.unlockOrientation(obj);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (importDefault(9794)()) {
    const result = require(8944) /* handleOrientationChange */.restoreDefaultOrientation();
    const obj = require(8944) /* handleOrientationChange */;
  }
};
