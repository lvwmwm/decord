// Module ID: 15942
// Function ID: 15943
// Name: triggerIOSHaptic
// Dependencies: [10051, 4162, 2]
// Exports: default

// Module 15942 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4162) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4162) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4162) /* HapticFeedbackTypes */;
  }
};
