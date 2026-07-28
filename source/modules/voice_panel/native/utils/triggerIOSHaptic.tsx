// Module ID: 15885
// Function ID: 122497
// Name: triggerIOSHaptic
// Dependencies: [10016, 4134, 2]
// Exports: default

// Module 15885 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4134) /* getAndroidLightImpactEffect */.triggerHapticFeedback(require(4134) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4134) /* getAndroidLightImpactEffect */;
  }
};
