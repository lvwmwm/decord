// Module ID: 15776
// Function ID: 121803
// Name: triggerIOSHaptic
// Dependencies: [10015, 4099, 2]
// Exports: default

// Module 15776 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4099) /* getAndroidLightImpactEffect */.triggerHapticFeedback(require(4099) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4099) /* getAndroidLightImpactEffect */;
  }
};
