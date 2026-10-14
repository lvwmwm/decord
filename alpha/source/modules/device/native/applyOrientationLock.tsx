// Module ID: 13520
// Function ID: 13521
// Name: applyOrientationLock
// Dependencies: [10369, 8458, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 13520 (applyOrientationLock)
import DeviceOrientation from "DeviceOrientation" /* 8458 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 10369 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (isOrientationLockSupportedDefault()) {
    const obj = DeviceOrientation;
    obj.lockOrientation(PORTRAIT, flag);
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  unlockAfterRotatingToPreviousLock = unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock;
  if (isOrientationLockSupportedDefault()) {
    const obj2 = { unlockAfterRotatingToPreviousLock };
    const obj = DeviceOrientation;
    obj.unlockOrientation(obj2);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (isOrientationLockSupportedDefault()) {
    const obj = DeviceOrientation;
    const result = obj.restoreDefaultOrientation();
  }
};
