// Module ID: 15834
// Function ID: 122294
// Name: triggerIOSHaptic
// Dependencies: [9976, 4100, 2]
// Exports: default

// Module 15834 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4100) /* getAndroidLightImpactEffect */.triggerHapticFeedback(require(4100) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4100) /* getAndroidLightImpactEffect */;
  }
};
