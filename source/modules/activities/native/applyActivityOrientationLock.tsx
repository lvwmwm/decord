// Module ID: 15829
// Function ID: 15830
// Name: applyActivityOrientationLock
// Dependencies: [4214, 10652, 8164, 2]
// Exports: default

// Module 15829 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

const result = require("handleOrientationChange").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (!obj.getIsTabletActivitySurface()) {
    if (OrientationLockState.UNLOCKED === arg0) {
      let tmpResult = tmp(8164);
      tmpResult.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
    } else if (tmp4.PORTRAIT === arg0) {
      tmpResult = tmp(8164);
      tmpResult.lockOrientation("PORTRAIT", true);
    } else if (tmp4.LANDSCAPE === arg0) {
      tmp(8164).lockOrientation("LANDSCAPE", true);
      const tmpResult1 = tmp(8164);
    }
  }
};
