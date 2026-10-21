// Module ID: 18280
// Function ID: 18281
// Name: applyActivityOrientationLock
// Dependencies: [2026, 14052, 2]
// Exports: default

// Module 18280 (applyActivityOrientationLock)
import Constants from "Constants" /* 2026 */;
import applyOrientationLock from "applyOrientationLock" /* 14052 */;
import size from "module_2" /* 2 */;

const OrientationLockState = Constants.OrientationLockState;
let result = size.fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (OrientationLockState.UNLOCKED === arg0) {
    const obj3 = applyOrientationLock;
    const result = obj3.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
  } else if (OrientationLockState.PORTRAIT === arg0) {
    const obj2 = applyOrientationLock;
    obj2.applyOrientationLock("PORTRAIT");
  } else if (OrientationLockState.LANDSCAPE === arg0) {
    const obj = applyOrientationLock;
    obj.applyOrientationLock("LANDSCAPE");
  }
};
