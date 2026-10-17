// Module ID: 13921
// Function ID: 13922
// Name: applyOrientationLock
// Dependencies: [10667, 8724, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 13921 (applyOrientationLock)
import DeviceOrientation from "DeviceOrientation" /* 8724 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 10667 */;
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
