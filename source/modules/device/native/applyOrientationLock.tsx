// Module ID: 11241
// Function ID: 11242
// Name: applyOrientationLock
// Dependencies: [9790, 8940, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 11241 (applyOrientationLock)
let result = require("set").fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (importDefault(9790)()) {
    require(8940) /* handleOrientationChange */.lockOrientation(PORTRAIT, flag);
    const obj = require(8940) /* handleOrientationChange */;
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (importDefault(9790)()) {
    let obj = require(8940) /* handleOrientationChange */;
    obj = { unlockAfterRotatingToPreviousLock: null };
    obj[0] = unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock;
    obj.unlockOrientation(obj);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (importDefault(9790)()) {
    const result = require(8940) /* handleOrientationChange */.restoreDefaultOrientation();
    const obj = require(8940) /* handleOrientationChange */;
  }
};
