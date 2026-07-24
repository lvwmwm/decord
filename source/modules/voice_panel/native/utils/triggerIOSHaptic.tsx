// Module ID: 15823
// Function ID: 122125
// Name: triggerIOSHaptic
// Dependencies: [10047, 4099, 2]
// Exports: default

// Module 15823 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4099) /* getAndroidLightImpactEffect */.triggerHapticFeedback(require(4099) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4099) /* getAndroidLightImpactEffect */;
  }
};
