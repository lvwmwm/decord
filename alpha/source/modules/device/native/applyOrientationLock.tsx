// Module ID: 13855
// Function ID: 13856
// Name: applyOrientationLock
// Dependencies: [10014, 8911, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 13855 (applyOrientationLock)
import DeviceOrientation from "DeviceOrientation" /* 8911 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 10014 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (isOrientationLockSupportedDefault()) {
    const obj = DeviceOrientation;
    obj.lockOrientation(PORTRAIT, flag);
  }
}
export function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  unlockAfterRotatingToPreviousLock = unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock;
  if (isOrientationLockSupportedDefault()) {
    const obj2 = { unlockAfterRotatingToPreviousLock };
    const obj = DeviceOrientation;
    obj.unlockOrientation(obj2);
  }
}
export function restoreDefaultOrientationLock() {
  if (isOrientationLockSupportedDefault()) {
    const obj = DeviceOrientation;
    const result = obj.restoreDefaultOrientation();
  }
}
