// Module ID: 16178
// Function ID: 16179
// Name: applyActivityOrientationLock
// Dependencies: [4370, 11249, 2]
// Exports: default

// Module 16178 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

let result = require("set").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (OrientationLockState.UNLOCKED === arg0) {
    const result = require(11249) /* applyOrientationLock */.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
    const obj3 = require(11249) /* applyOrientationLock */;
  } else if (tmp.PORTRAIT === arg0) {
    require(11249) /* applyOrientationLock */.applyOrientationLock("PORTRAIT");
    const obj2 = require(11249) /* applyOrientationLock */;
  } else if (tmp.LANDSCAPE === arg0) {
    require(11249) /* applyOrientationLock */.applyOrientationLock("LANDSCAPE");
    const obj = require(11249) /* applyOrientationLock */;
  }
};
