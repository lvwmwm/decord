// Module ID: 16039
// Function ID: 16040
// Name: triggerIOSHaptic
// Dependencies: [11558, 4254, 2]
// Exports: default

// Module 16039 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4254) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4254) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4254) /* HapticFeedbackTypes */;
  }
};
