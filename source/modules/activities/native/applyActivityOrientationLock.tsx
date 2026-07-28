// Module ID: 15800
// Function ID: 121703
// Name: applyActivityOrientationLock
// Dependencies: [4190, 10632, 8143, 2]
// Exports: default

// Module 15800 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

const result = require("handleOrientationChange").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  let obj = require(10632) /* getIsTabletActivitySurface */;
  if (!obj.getIsTabletActivitySurface()) {
    if (OrientationLockState.UNLOCKED === arg0) {
      obj = { unlockAfterRotatingToPreviousLock: true };
      require(8143) /* handleOrientationChange */.unlockOrientation(obj);
      const obj4 = require(8143) /* handleOrientationChange */;
    } else if (OrientationLockState.PORTRAIT === arg0) {
      require(8143) /* handleOrientationChange */.lockOrientation("PORTRAIT", true);
      const obj3 = require(8143) /* handleOrientationChange */;
    } else if (OrientationLockState.LANDSCAPE === arg0) {
      require(8143) /* handleOrientationChange */.lockOrientation("LANDSCAPE", true);
      const obj2 = require(8143) /* handleOrientationChange */;
    }
  }
};
