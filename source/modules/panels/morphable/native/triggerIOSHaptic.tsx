// Module ID: 15947
// Function ID: 15948
// Name: triggerIOSHaptic
// Dependencies: [11531, 4224, 2]
// Exports: default

// Module 15947 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4224) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4224) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4224) /* HapticFeedbackTypes */;
  }
};
