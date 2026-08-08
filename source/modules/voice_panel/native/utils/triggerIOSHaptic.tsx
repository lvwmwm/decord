// Module ID: 16160
// Function ID: 16161
// Name: triggerIOSHaptic
// Dependencies: [11645, 4272, 2]
// Exports: default

// Module 16160 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4272) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4272) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4272) /* HapticFeedbackTypes */;
  }
};
