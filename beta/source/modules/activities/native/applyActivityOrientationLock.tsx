// Module ID: 17453
// Function ID: 17454
// Name: applyActivityOrientationLock
// Dependencies: [2008, 11947, 2]
// Exports: default

// Module 17453 (applyActivityOrientationLock)
import Constants from "Constants" /* 2008 */;
import applyOrientationLock from "applyOrientationLock" /* 11947 */;
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
