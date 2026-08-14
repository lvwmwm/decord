// Module ID: 16191
// Function ID: 16192
// Name: triggerIOSHaptic
// Dependencies: [11722, 4311, 2]
// Exports: default

// Module 16191 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4311) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4311) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4311) /* HapticFeedbackTypes */;
  }
};
