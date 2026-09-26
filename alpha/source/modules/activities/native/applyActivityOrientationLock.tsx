// Module ID: 16829
// Function ID: 16830
// Name: applyActivityOrientationLock
// Dependencies: [2005, 10758, 2]
// Exports: default

// Module 16829 (applyActivityOrientationLock)
import Constants from "Constants" /* 2005 */;
import applyOrientationLock from "applyOrientationLock" /* 10758 */;
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
