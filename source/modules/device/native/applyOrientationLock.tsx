// Module ID: 11343
// Function ID: 11344
// Name: applyOrientationLock
// Dependencies: [9900, 9042, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 11343 (applyOrientationLock)
import set from "set" /* 2 */;
import handleOrientationChange from "handleOrientationChange" /* 9042 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 9900 */;

let result = set.fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (isOrientationLockSupportedDefault()) {
    handleOrientationChange.lockOrientation(PORTRAIT, flag);
    const obj = handleOrientationChange;
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (isOrientationLockSupportedDefault()) {
    let obj = handleOrientationChange;
    obj = { unlockAfterRotatingToPreviousLock: null };
    obj[0] = unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock;
    obj.unlockOrientation(obj);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (isOrientationLockSupportedDefault()) {
    const result = handleOrientationChange.restoreDefaultOrientation();
    const obj = handleOrientationChange;
  }
};
