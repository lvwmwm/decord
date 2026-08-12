// Module ID: 16243
// Function ID: 16244
// Name: triggerIOSHaptic
// Dependencies: [11706, 4313, 2]
// Exports: default

// Module 16243 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4313) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4313) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4313) /* HapticFeedbackTypes */;
  }
};
