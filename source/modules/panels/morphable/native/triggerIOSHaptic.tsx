// Module ID: 16241
// Function ID: 16242
// Name: triggerIOSHaptic
// Dependencies: [11441, 4343, 2]
// Exports: default

// Module 16241 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4343) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4343) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4343) /* HapticFeedbackTypes */;
  }
};
