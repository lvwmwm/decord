// Module ID: 15987
// Function ID: 15988
// Name: triggerIOSHaptic
// Dependencies: [11565, 4254, 2]
// Exports: default

// Module 15987 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4254) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4254) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4254) /* HapticFeedbackTypes */;
  }
};
