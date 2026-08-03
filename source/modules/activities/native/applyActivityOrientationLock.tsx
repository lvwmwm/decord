// Module ID: 15921
// Function ID: 15922
// Name: applyActivityOrientationLock
// Dependencies: [4280, 10778, 8478, 2]
// Exports: default

// Module 15921 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

const result = require("handleOrientationChange").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (!obj.getIsTabletActivitySurface()) {
    if (OrientationLockState.UNLOCKED === arg0) {
      let tmpResult = tmp(8478);
      tmpResult.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
    } else if (tmp4.PORTRAIT === arg0) {
      tmpResult = tmp(8478);
      tmpResult.lockOrientation("PORTRAIT", true);
    } else if (tmp4.LANDSCAPE === arg0) {
      tmp(8478).lockOrientation("LANDSCAPE", true);
      const tmpResult1 = tmp(8478);
    }
  }
};
