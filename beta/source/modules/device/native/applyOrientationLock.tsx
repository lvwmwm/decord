// Module ID: 14973
// Function ID: 14974
// Name: applyOrientationLock
// Dependencies: [11167, 9010, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 14973 (applyOrientationLock)
import DeviceOrientation from "DeviceOrientation" /* 9010 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 11167 */;
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
