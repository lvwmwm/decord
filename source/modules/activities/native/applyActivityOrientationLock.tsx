// Module ID: 15761
// Function ID: 121547
// Name: applyActivityOrientationLock
// Dependencies: [4156, 10594, 8105, 2]
// Exports: default

// Module 15761 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

const result = require("handleOrientationChange").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  let obj = require(10594) /* getIsTabletActivitySurface */;
  if (!obj.getIsTabletActivitySurface()) {
    if (OrientationLockState.UNLOCKED === arg0) {
      obj = { unlockAfterRotatingToPreviousLock: true };
      require(8105) /* handleOrientationChange */.unlockOrientation(obj);
      const obj4 = require(8105) /* handleOrientationChange */;
    } else if (OrientationLockState.PORTRAIT === arg0) {
      require(8105) /* handleOrientationChange */.lockOrientation("PORTRAIT", true);
      const obj3 = require(8105) /* handleOrientationChange */;
    } else if (OrientationLockState.LANDSCAPE === arg0) {
      require(8105) /* handleOrientationChange */.lockOrientation("LANDSCAPE", true);
      const obj2 = require(8105) /* handleOrientationChange */;
    }
  }
};
