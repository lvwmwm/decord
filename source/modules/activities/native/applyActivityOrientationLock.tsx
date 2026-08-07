// Module ID: 16000
// Function ID: 16001
// Name: applyActivityOrientationLock
// Dependencies: [4327, 10653, 8835, 2]
// Exports: default

// Module 16000 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

const result = require("handleOrientationChange").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (!obj.getIsTabletActivitySurface()) {
    if (OrientationLockState.UNLOCKED === arg0) {
      let tmpResult = tmp(8835);
      tmpResult.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
    } else if (tmp4.PORTRAIT === arg0) {
      tmpResult = tmp(8835);
      tmpResult.lockOrientation("PORTRAIT", true);
    } else if (tmp4.LANDSCAPE === arg0) {
      tmp(8835).lockOrientation("LANDSCAPE", true);
      const tmpResult1 = tmp(8835);
    }
  }
};
