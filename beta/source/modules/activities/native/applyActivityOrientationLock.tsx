// Module ID: 19189
// Function ID: 19190
// Name: applyActivityOrientationLock
// Dependencies: [2145, 13766, 2]
// Exports: default

// Module 19189 (applyActivityOrientationLock)
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2145 */;
import applyOrientationLock from "applyOrientationLock" /* 13766 */;
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
