// Module ID: 16085
// Function ID: 16086
// Name: triggerIOSHaptic
// Dependencies: [11579, 4271, 2]
// Exports: default

// Module 16085 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4271) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4271) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4271) /* HapticFeedbackTypes */;
  }
};
