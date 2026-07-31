// Module ID: 15870
// Function ID: 15871
// Name: triggerIOSHaptic
// Dependencies: [10052, 4162, 2]
// Exports: default

// Module 15870 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4162) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4162) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4162) /* HapticFeedbackTypes */;
  }
};
