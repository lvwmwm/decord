// Module ID: 16013
// Function ID: 16014
// Name: triggerIOSHaptic
// Dependencies: [11580, 4271, 2]
// Exports: default

// Module 16013 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4271) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4271) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4271) /* HapticFeedbackTypes */;
  }
};
