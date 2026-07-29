// Module ID: 15848
// Function ID: 15849
// Name: triggerIOSHaptic
// Dependencies: [10039, 4158, 2]
// Exports: default

// Module 15848 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4158) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4158) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4158) /* HapticFeedbackTypes */;
  }
};
