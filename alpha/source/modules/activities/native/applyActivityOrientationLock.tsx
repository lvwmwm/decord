// Module ID: 17576
// Function ID: 17577
// Name: applyActivityOrientationLock
// Dependencies: [2004, 12124, 2]
// Exports: default

// Module 17576 (applyActivityOrientationLock)
import Constants from "Constants" /* 2004 */;
import applyOrientationLock from "applyOrientationLock" /* 12124 */;
import size from "module_2" /* 2 */;

const OrientationLockState = Constants.OrientationLockState;
let result = size.fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (OrientationLockState.UNLOCKED === arg0) {
    const result = applyOrientationLock.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
  } else if (tmp.PORTRAIT === arg0) {
    applyOrientationLock.applyOrientationLock("PORTRAIT");
  } else if (tmp.LANDSCAPE === arg0) {
    applyOrientationLock.applyOrientationLock("LANDSCAPE");
  }
};
