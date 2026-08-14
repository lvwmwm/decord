// Module ID: 11249
// Function ID: 11250
// Name: applyOrientationLock
// Dependencies: [9805, 8958, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 11249 (applyOrientationLock)
let result = require("set").fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (importDefault(9805)()) {
    require(8958) /* handleOrientationChange */.lockOrientation(PORTRAIT, flag);
    const obj = require(8958) /* handleOrientationChange */;
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (importDefault(9805)()) {
    let obj = require(8958) /* handleOrientationChange */;
    obj = { unlockAfterRotatingToPreviousLock: null };
    obj[0] = unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock;
    obj.unlockOrientation(obj);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (importDefault(9805)()) {
    const result = require(8958) /* handleOrientationChange */.restoreDefaultOrientation();
    const obj = require(8958) /* handleOrientationChange */;
  }
};
