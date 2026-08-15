// Module ID: 10964
// Function ID: 10965
// Name: applyOrientationLock
// Dependencies: [8676, 8671, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 10964 (applyOrientationLock)
let result = require("set").fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (importDefault(8676)()) {
    require(8671) /* handleOrientationChange */.lockOrientation(PORTRAIT, flag);
    const obj = require(8671) /* handleOrientationChange */;
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (importDefault(8676)()) {
    let obj = require(8671) /* handleOrientationChange */;
    obj = { unlockAfterRotatingToPreviousLock: null };
    obj[0] = unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock;
    obj.unlockOrientation(obj);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (importDefault(8676)()) {
    const result = require(8671) /* handleOrientationChange */.restoreDefaultOrientation();
    const obj = require(8671) /* handleOrientationChange */;
  }
};
