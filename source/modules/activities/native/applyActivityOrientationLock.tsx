// Module ID: 16084
// Function ID: 16085
// Name: applyActivityOrientationLock
// Dependencies: [4328, 9744, 8895, 2]
// Exports: default

// Module 16084 (applyActivityOrientationLock)
import { OrientationLockState } from "items3";

const result = require("handleOrientationChange").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (importDefault(9744)()) {
    if (OrientationLockState.UNLOCKED === arg0) {
      require(8895) /* handleOrientationChange */.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
      const obj3 = require(8895) /* handleOrientationChange */;
    } else if (tmp3.PORTRAIT === arg0) {
      require(8895) /* handleOrientationChange */.lockOrientation("PORTRAIT", true);
      const obj2 = require(8895) /* handleOrientationChange */;
    } else if (tmp3.LANDSCAPE === arg0) {
      require(8895) /* handleOrientationChange */.lockOrientation("LANDSCAPE", true);
      const obj = require(8895) /* handleOrientationChange */;
    }
  }
};
