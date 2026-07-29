// Module ID: 15835
// Function ID: 15836
// Name: applyActivityOrientationLock
// Dependencies: [4214, 10656, 8167, 2]
// Exports: default

// Module 15835 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

const result = require("handleOrientationChange").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (!obj.getIsTabletActivitySurface()) {
    if (OrientationLockState.UNLOCKED === arg0) {
      let tmpResult = tmp(8167);
      tmpResult.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
    } else if (tmp4.PORTRAIT === arg0) {
      tmpResult = tmp(8167);
      tmpResult.lockOrientation("PORTRAIT", true);
    } else if (tmp4.LANDSCAPE === arg0) {
      tmp(8167).lockOrientation("LANDSCAPE", true);
      const tmpResult1 = tmp(8167);
    }
  }
};
