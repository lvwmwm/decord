// Module ID: 16169
// Function ID: 16170
// Name: triggerIOSHaptic
// Dependencies: [11646, 4272, 2]
// Exports: default

// Module 16169 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4272) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4272) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4272) /* HapticFeedbackTypes */;
  }
};
