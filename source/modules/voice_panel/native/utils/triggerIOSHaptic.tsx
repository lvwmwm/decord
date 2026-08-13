// Module ID: 16254
// Function ID: 16255
// Name: triggerIOSHaptic
// Dependencies: [11704, 4311, 2]
// Exports: default

// Module 16254 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4311) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4311) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4311) /* HapticFeedbackTypes */;
  }
};
