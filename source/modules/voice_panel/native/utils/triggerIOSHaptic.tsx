// Module ID: 16606
// Function ID: 16607
// Name: triggerIOSHaptic
// Dependencies: [11776, 4414, 2]
// Exports: default

// Module 16606 (triggerIOSHaptic)
import set from "set" /* 2 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4414 */;
import VoicePanelModes from "VoicePanelModes" /* 11776 */;

const IS_IOS = VoicePanelModes.IS_IOS;
let result = set.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = HapticFeedbackTypes;
  }
};
