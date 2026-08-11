// Module ID: 16101
// Function ID: 16102
// Name: applyActivityOrientationLock
// Dependencies: [4328, 9749, 8901, 2]
// Exports: default

// Module 16101 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

const result = require("handleOrientationChange").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (importDefault(9749)()) {
    if (OrientationLockState.UNLOCKED === arg0) {
      require(8901) /* handleOrientationChange */.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
      const obj3 = require(8901) /* handleOrientationChange */;
    } else if (tmp3.PORTRAIT === arg0) {
      require(8901) /* handleOrientationChange */.lockOrientation("PORTRAIT", true);
      const obj2 = require(8901) /* handleOrientationChange */;
    } else if (tmp3.LANDSCAPE === arg0) {
      require(8901) /* handleOrientationChange */.lockOrientation("LANDSCAPE", true);
      const obj = require(8901) /* handleOrientationChange */;
    }
  }
};
