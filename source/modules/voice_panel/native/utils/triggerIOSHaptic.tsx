// Module ID: 16910
// Function ID: 16911
// Name: triggerIOSHaptic
// Dependencies: [12063, 4446, 2]
// Exports: default

// Module 16910 (triggerIOSHaptic)
import set from "set" /* 2 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4446 */;
import VoicePanelModes from "VoicePanelModes" /* 12063 */;

const IS_IOS = VoicePanelModes.IS_IOS;
let result = set.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = HapticFeedbackTypes;
  }
};
