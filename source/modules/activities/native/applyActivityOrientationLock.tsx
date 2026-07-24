// Module ID: 15738
// Function ID: 121331
// Name: applyActivityOrientationLock
// Dependencies: [4155, 10629, 8347, 2]
// Exports: default

// Module 15738 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

const result = require("handleOrientationChange").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  let obj = require(10629) /* getIsTabletActivitySurface */;
  if (!obj.getIsTabletActivitySurface()) {
    if (OrientationLockState.UNLOCKED === arg0) {
      obj = { unlockAfterRotatingToPreviousLock: true };
      require(8347) /* handleOrientationChange */.unlockOrientation(obj);
      const obj4 = require(8347) /* handleOrientationChange */;
    } else if (OrientationLockState.PORTRAIT === arg0) {
      require(8347) /* handleOrientationChange */.lockOrientation("PORTRAIT", true);
      const obj3 = require(8347) /* handleOrientationChange */;
    } else if (OrientationLockState.LANDSCAPE === arg0) {
      require(8347) /* handleOrientationChange */.lockOrientation("LANDSCAPE", true);
      const obj2 = require(8347) /* handleOrientationChange */;
    }
  }
};
