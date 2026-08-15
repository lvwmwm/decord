// Module ID: 16228
// Function ID: 16229
// Name: applyActivityOrientationLock
// Dependencies: [4481, 10964, 2]
// Exports: default

// Module 16228 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

let result = require("set").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (OrientationLockState.UNLOCKED === arg0) {
    const result = require(10964) /* applyOrientationLock */.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
    const obj3 = require(10964) /* applyOrientationLock */;
  } else if (tmp.PORTRAIT === arg0) {
    require(10964) /* applyOrientationLock */.applyOrientationLock("PORTRAIT");
    const obj2 = require(10964) /* applyOrientationLock */;
  } else if (tmp.LANDSCAPE === arg0) {
    require(10964) /* applyOrientationLock */.applyOrientationLock("LANDSCAPE");
    const obj = require(10964) /* applyOrientationLock */;
  }
};
