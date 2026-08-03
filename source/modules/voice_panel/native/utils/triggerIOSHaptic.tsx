// Module ID: 16006
// Function ID: 16007
// Name: triggerIOSHaptic
// Dependencies: [10193, 4224, 2]
// Exports: default

// Module 16006 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4224) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4224) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4224) /* HapticFeedbackTypes */;
  }
};
