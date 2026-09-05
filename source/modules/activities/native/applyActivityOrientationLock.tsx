// Module ID: 17009
// Function ID: 17010
// Name: applyActivityOrientationLock
// Dependencies: [1920, 11785, 2]
// Exports: default

// Module 17009 (applyActivityOrientationLock)
import set from "set" /* 2 */;
import items3 from "items3" /* 1920 */;
import applyOrientationLock from "applyOrientationLock" /* 11785 */;

const OrientationLockState = items3.OrientationLockState;
let result = set.fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (OrientationLockState.UNLOCKED === arg0) {
    const result = applyOrientationLock.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
    const obj3 = applyOrientationLock;
  } else if (tmp.PORTRAIT === arg0) {
    applyOrientationLock.applyOrientationLock("PORTRAIT");
    const obj2 = applyOrientationLock;
  } else if (tmp.LANDSCAPE === arg0) {
    applyOrientationLock.applyOrientationLock("LANDSCAPE");
    const obj = applyOrientationLock;
  }
};
