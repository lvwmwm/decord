// Module ID: 12036
// Function ID: 12037
// Name: applyOrientationLock
// Dependencies: [9645, 8603, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 12036 (applyOrientationLock)
import DeviceOrientation from "DeviceOrientation" /* 8603 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 9645 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (isOrientationLockSupportedDefault()) {
    DeviceOrientation.lockOrientation(PORTRAIT, flag);
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (isOrientationLockSupportedDefault()) {
    const obj2 = { unlockAfterRotatingToPreviousLock: unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock };
    DeviceOrientation.unlockOrientation(obj2);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (isOrientationLockSupportedDefault()) {
    const result = DeviceOrientation.restoreDefaultOrientation();
  }
};
