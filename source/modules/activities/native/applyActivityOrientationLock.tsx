// Module ID: 16169
// Function ID: 16170
// Name: applyActivityOrientationLock
// Dependencies: [4370, 11232, 2]
// Exports: default

// Module 16169 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

let result = require("set").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (OrientationLockState.UNLOCKED === arg0) {
    const result = require(11232) /* applyOrientationLock */.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
    const obj3 = require(11232) /* applyOrientationLock */;
  } else if (tmp.PORTRAIT === arg0) {
    require(11232) /* applyOrientationLock */.applyOrientationLock("PORTRAIT");
    const obj2 = require(11232) /* applyOrientationLock */;
  } else if (tmp.LANDSCAPE === arg0) {
    require(11232) /* applyOrientationLock */.applyOrientationLock("LANDSCAPE");
    const obj = require(11232) /* applyOrientationLock */;
  }
};
