// Module ID: 15934
// Function ID: 15935
// Name: triggerIOSHaptic
// Dependencies: [10194, 4224, 2]
// Exports: default

// Module 15934 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4224) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4224) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4224) /* HapticFeedbackTypes */;
  }
};
