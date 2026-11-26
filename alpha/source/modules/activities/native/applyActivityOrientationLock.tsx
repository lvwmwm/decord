// Module ID: 19396
// Function ID: 19397
// Name: applyActivityOrientationLock
// Dependencies: [2146, 13848, 2]
// Exports: default

// Module 19396 (applyActivityOrientationLock)
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2146 */;
import applyOrientationLock from "applyOrientationLock" /* 13848 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED === arg0) {
    const tmpResult = applyOrientationLock;
    const result = tmpResult.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
  } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT === arg0) {
    const tmpResult3 = applyOrientationLock;
    tmpResult3.applyOrientationLock("PORTRAIT");
  } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE === arg0) {
    const tmpResult4 = applyOrientationLock;
    tmpResult4.applyOrientationLock("LANDSCAPE");
  }
};
