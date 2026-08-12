// Module ID: 16171
// Function ID: 16172
// Name: triggerIOSHaptic
// Dependencies: [11707, 4313, 2]
// Exports: default

// Module 16171 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4313) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4313) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4313) /* HapticFeedbackTypes */;
  }
};
