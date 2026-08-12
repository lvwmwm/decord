// Module ID: 16158
// Function ID: 16159
// Name: applyActivityOrientationLock
// Dependencies: [4369, 11241, 2]
// Exports: default

// Module 16158 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

let result = require("set").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (OrientationLockState.UNLOCKED === arg0) {
    const result = require(11241) /* applyOrientationLock */.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
    const obj3 = require(11241) /* applyOrientationLock */;
  } else if (tmp.PORTRAIT === arg0) {
    require(11241) /* applyOrientationLock */.applyOrientationLock("PORTRAIT");
    const obj2 = require(11241) /* applyOrientationLock */;
  } else if (tmp.LANDSCAPE === arg0) {
    require(11241) /* applyOrientationLock */.applyOrientationLock("LANDSCAPE");
    const obj = require(11241) /* applyOrientationLock */;
  }
};
