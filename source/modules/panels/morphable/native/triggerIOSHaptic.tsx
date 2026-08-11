// Module ID: 16114
// Function ID: 16115
// Name: triggerIOSHaptic
// Dependencies: [11650, 4272, 2]
// Exports: default

// Module 16114 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4272) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4272) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4272) /* HapticFeedbackTypes */;
  }
};
