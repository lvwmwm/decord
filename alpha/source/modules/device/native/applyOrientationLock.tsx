// Module ID: 12040
// Function ID: 12041
// Name: applyOrientationLock
// Dependencies: [9651, 8607, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 12040 (applyOrientationLock)
import DeviceOrientation from "DeviceOrientation" /* 8607 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 9651 */;
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
