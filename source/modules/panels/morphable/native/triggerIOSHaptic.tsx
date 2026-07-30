// Module ID: 15842
// Function ID: 15843
// Name: triggerIOSHaptic
// Dependencies: [10035, 4158, 2]
// Exports: default

// Module 15842 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4158) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4158) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4158) /* HapticFeedbackTypes */;
  }
};
