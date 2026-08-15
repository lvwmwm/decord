// Module ID: 16313
// Function ID: 16314
// Name: triggerIOSHaptic
// Dependencies: [11440, 4343, 2]
// Exports: default

// Module 16313 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4343) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4343) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4343) /* HapticFeedbackTypes */;
  }
};
